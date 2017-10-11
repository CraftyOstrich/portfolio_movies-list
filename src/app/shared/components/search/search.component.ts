import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Genre } from '../../../models/genre';
import { SearchService } from '../../services/search.service';
import { Keyword } from '../../../models/keyword';
import { API_CONFIG } from '../../../app-config';
import { ActivatedRoute, Params } from '@angular/router';

export class FilterOptions {
  /**
   * Year filter
   * @type {{fieldNameMovie: string; fieldNameTV: string; value: number}}
   * @private
   */
  private _year = {
    fieldNameMovie: 'primary_release_year',
    fieldNameTV: 'first_air_date_year',
    value: <number>null
  };
  /**
   * Sort by sortByList
   * @type {{fieldName: string; value: string}}
   * @private
   */
  private _sortBy = {
    fieldName: 'sort_by',
    value: <string>null
  };
  /**
   * Genres filter
   * @type {{fieldName: string; value: Genre[]}}
   * @private
   */
  private _genres = {
    fieldName: 'with_genres',
    value: <Genre[]>[]
  };
  /**
   * Search by keywords
   * @type {{fieldName: string; value: Keyword[]}}
   * @private
   */
  private _keywords = {
    fieldName: 'with_keywords',
    value: <Keyword[]>[]
  };
  /**
   * List of year
   * @type {Array}
   */
  public yearsList: number[] = [];
  /**
   * Sort list items
   * @type {[{select: string; urlSortBy: string}]}
   */
  public sortByList = [
    {
      select: 'Choose sort by...',
      urlSortBy: '',
    },
    {
      select: 'Popularity Descending',
      urlSortBy: 'popularity.desc',
    },
    {
      select: 'Popularity Ascending',
      urlSortBy: 'popularity.asc',
    },
    {
      select: 'Rating Descending',
      urlSortBy: 'vote_average.desc',
    },
    {
      select: 'Rating Ascending',
      urlSortBy: 'vote_average.asc',
    },
    {
      select: 'Release Date Descending',
      urlSortBy: 'release_date.desc',
    },
    {
      select: 'Release Date Ascending',
      urlSortBy: 'release_date.asc',
    },
    {
      select: 'Title (A - Z)',
      urlSortBy: 'original_title.asc',
    },
    {
      select: 'Title (Z - A)',
      urlSortBy: 'original_title.desc',
    },
  ];
  /**
   * Genres list
   */
  public genresList: Genre[];
  /**
   * Url for filter request
   * @type {Subject}
   */
  public optionsUrl: Subject<string> = new Subject();

  constructor() {
    this.yearsList = setYears();
  }

  /**
   * On options filter was changed
   * @param currentUrl
   */
  public onOptionsChange(currentUrl?: string) {
    const options: string[] = [];
    const genresValueLength: number = this._genres.value.length;
    if (this._year.value) {
      if (currentUrl === 'movie') {
        options.push(`${this._year.fieldNameMovie}=${this._year.value}`);
      } else if (currentUrl === 'tv') {
        options.push(`${this._year.fieldNameTV}=${this._year.value}`);
      }
    }
    if (this._sortBy.value) {
      options.push(`${this._sortBy.fieldName}=${this._sortBy.value}`);
    }
    if (genresValueLength) {
      let genres: string = this._genres.value[0].id.toString();
      for (let i = 1; i < genresValueLength; i++) {
        genres += `,${this._genres.value[i].id}`;
      }
      options.push(`${this._genres.fieldName}=${genres}`);
    }
    if (this._keywords.value.length) {
      let keywords: string = this._keywords.value[0].id.toString();
      for (let i = 1; i < this._keywords.value.length; i++) {
        keywords += `,${this._keywords.value[i].id}`;
      }
      options.push(`${this._keywords.fieldName}=${keywords}`);
    }
    if (options.length) {
      this.optionsUrl.next(options.join('&'));
    }
  }

  /**
   * On year filter was changed
   * @param year
   * @param currentUrl
   */
  public onYearChange(year, currentUrl) {
    if (year) {
      this._year.value = year;
      this.onOptionsChange(currentUrl);
    }
  }

  /**
   * On sort by filter was changed
   * @param sortBy
   */
  public onSortChange(sortBy) {
    this._sortBy.value = sortBy;
    this.onOptionsChange();
  }

  /**
   * On genre was selected
   * @param genre
   */
  public onGenreSelect(genre: Genre) {
    const found = this._genres.value.findIndex((g: Genre) => g.id === genre.id) > -1;
    if (!found) {
      this._genres.value.push(genre);
    }
    this.onOptionsChange();
  }

  /**
   * On genre's filter was removed
   * @param id
   */
  public onGenreRemove(id: number) {
    const foundIndex = this._genres.value.findIndex((genre: Genre) => genre.id === id);
    if (foundIndex > -1) {
      this._genres.value.splice(foundIndex, 1);
    }
    this.onOptionsChange();
  }

  /**
   * On keyword was selected
   * @param keyword
   */
  public onKeywordSelect(keyword: Keyword) {
    const found = this._keywords.value.findIndex((k: Keyword) => k.id === keyword.id) > -1;
    if (!found) {
      this._keywords.value.push(keyword);
    }
    this.onOptionsChange();
  }

  /**
   * On keyword was removed
   */
  public onKeywordRemove(id: number) {
    const foundIndex = this._keywords.value.findIndex((k: Keyword) => k.id === id);
    if (foundIndex > -1) {
      this._keywords.value.splice(foundIndex, 1);
    }
    this.onOptionsChange();
  }

  /**
   * When filter options was changed
   * @returns {Observable<string>}
   */
  get optionsChange(): Observable<string> {
    if (this.optionsUrl) {
      return this.optionsUrl.asObservable();
    }
  }

  /**
   * Set genre list
   * @param genres
   */
  public setGenres(genres) {
    this.genresList = genres;
  }
}

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss']
})

export class SearchComponent implements OnInit {
  /**
   * When filter option was changed
   * @type {EventEmitter}
   */
  @Output() public onFilterChange: EventEmitter<string> = new EventEmitter();
  /**
   * Search url for request
   */
  @Input() public searchUrl: string;
  /**
   * Filter options
   */
  public filterOptions: any;
  /**
   * Search keyword
   * @type {string}
   */
  public keywordsSearch = '';
  /**
   * Keywords search list
   * @type {Array}
   */
  public keywordsList: Keyword[] = [];
  /**
   * Display genres list
   * @type {boolean}
   */
  public displayGenres = false;
  /**
   * Display keywords list
   * @type {boolean}
   */
  public displayKeywords = false;
  /**
   * Current url
   * @type {string}
   */
  public currentUrl = '';
  /**
   * Error message
   */
  private _errorMessage: string;

  constructor(private _searchService: SearchService,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.currentUrl = params.type;
    });
    this.filterOptions = new FilterOptions();
    this.filterOptions.optionsChange.subscribe((url: string) => {
      this.onFilterChange.emit(url);
    });
    this._searchService.getGenres(this.searchUrl)
      .subscribe(response => {
          const genres = response.genres || [];
          this.filterOptions.setGenres(genres);
        },
        error => this._errorMessage = <any>error);
  }

  /**
   * Display genres list
   */
  public displayGenreList() {
    this.displayGenres = !this.displayGenres;
  }

  /**
   * Load keyword list
   * @param event
   */
  public loadKeywordsList(event) {
    if (event) {
      this._searchService.getKeywords(API_CONFIG.KEYWORDS_LIST, this.keywordsSearch)
        .subscribe(response =>
            this.keywordsList = response.results || [],
          error => this._errorMessage = <any>error);
    }
    if (!this.displayKeywords) {
      this.displayKeywords = !this.displayKeywords;
    }
  }

  /**
   * On genre selected
   * @param item
   */
  public selectGenre(item: Genre) {
    this.displayGenres = !this.displayGenres;
    if (item) {
      this.filterOptions.onGenreSelect(item);
    }
  }

  /**
   * On keyword selected
   * @param keyword
   */
  public selectKeyword(keyword: Keyword) {
    this.displayKeywords = !this.displayKeywords;
    if (keyword) {
      this.filterOptions.onKeywordSelect(keyword);
      this.keywordsSearch = '';
    }
  }
}

function setYears() {
  const years = [];
  for (let i = 2017; i > 1899; i--) {
    years.push(i);
  }
  return years;
}
