import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Genre} from "../../../models/genre";
import {SearchService} from "../../services/search.service";
import {Keyword} from "../../../models/keyword";
import {isNumber} from "util";

export class FilterOptions {


  private year = {
    fieldNameMovie: 'primary_release_year',
    fieldNameTV: 'first_air_date_year',
    value: <number>null
  };
  private sortBy = {
    fieldName: 'sort_by',
    value: <string>null
  };
  private genres = {
    fieldName: 'with_genres',
    value: <Genre[]>[]
  };
  private keywords = {
    fieldName: 'with_keywords',
    value: <Keyword[]>[]
  };

  yearsList: number[] = [];
  sortByList = [
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
  genresList: Genre[];

  optionsUrl: Subject<string> = new Subject();

  constructor() {
    this.yearsList = setYears();
  }

  onOptionsChange() {
    let href = window.location.href.slice(31);
    let options: string[] = [];
    let genresValueLength: number = this.genres.value.length;
    if (this.year.value) {
      if (href === 'movie') {
        options.push(`${this.year.fieldNameMovie}=${this.year.value}`);
      }
      else if (href === 'tv') {
        options.push(`${this.year.fieldNameTV}=${this.year.value}`);
      }
    }
    if (this.sortBy.value) {
      options.push(`${this.sortBy.fieldName}=${this.sortBy.value}`);
    }
    if (genresValueLength) {
      let genres: string = this.genres.value[0].id.toString();
      for (let i = 1; i < genresValueLength; i++) {
        genres += `,${this.genres.value[i].id}`;
      }
      options.push(`${this.genres.fieldName}=${genres}`);
    }
    if (this.keywords.value.length) {
      let keywords: string = this.keywords.value[0].id.toString();
      for (let i = 1; i < this.keywords.value.length; i++) {
        keywords += `,${this.keywords.value[i].id}`;
      }
      options.push(`${this.keywords.fieldName}=${keywords}`);
    }

    if (options.length) {
      this.optionsUrl.next(options.join('&'))
    }
  }

  onYearChange(year) {
    if (year) {
      this.year.value = year;
      this.onOptionsChange();
    }
  }

  onSortChange(sortBy) {
    this.sortBy.value = sortBy;
    this.onOptionsChange();
  }

  onGenreSelect(genre: Genre) {
    const found = this.genres.value.findIndex((g: Genre) => g.id === genre.id) > -1;
    if (!found) {
      this.genres.value.push(genre);
    }
    this.onOptionsChange();
  }

  onGenreRemove(id: number) {
    const foundIndex = this.genres.value.findIndex((genre: Genre) => genre.id === id);
    if (foundIndex > -1) {
      this.genres.value.splice(foundIndex, 1);
    }
    this.onOptionsChange();
  }

  onKeywordSelect(keyword: Keyword) {
    const found = this.keywords.value.findIndex((k: Keyword) => k.id === keyword.id) > -1;
    if (!found) {
      this.keywords.value.push(keyword);
    }
    this.onOptionsChange();
  }

  onKeywordRemove(id: number) {
    const foundIndex = this.keywords.value.findIndex((k: Keyword) => k.id === id);
    if (foundIndex > -1) {
      this.keywords.value.splice(foundIndex, 1);
    }
    this.onOptionsChange();
  }

  get optionsChange(): Observable<string> {
    if (this.optionsUrl) {
      return this.optionsUrl.asObservable();
    }
  }

  setGenres(genres) {
    this.genresList = genres;
  }
}


@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss']
})

export class SearchComponent implements OnInit {
  @Output() onFilterChange: EventEmitter<string> = new EventEmitter();
  @Input() searchUrl: string;
  filterOptions: any;
  keywordsSearch: string = '';
  keywordsList: Keyword[] = [];
  private displayGenres: boolean = false;
  private displayKeywords: boolean = false;
  private UrlKeywordList = '/search/keyword';
  private errorMessage: string;


  constructor(public _searchService: SearchService) {}

  ngOnInit() {
    this.filterOptions = new FilterOptions();
    this.filterOptions.optionsChange.subscribe((url: string) => {
      this.onFilterChange.emit(url);
    });
    this._searchService.getGenres(this.searchUrl)
      .subscribe(response => {
          let genres = response.genres || [];
          this.filterOptions.setGenres(genres);
        },
        error => this.errorMessage = <any>error);
  }

  displayGenreList() {
    this.displayGenres = !this.displayGenres;
  }

  loadKeywordsList(event) {
    if (event) {
      this._searchService.getKeywords(this.UrlKeywordList, this.keywordsSearch)
        .subscribe(response => this.keywordsList = response.results || [],
          error => this.errorMessage = <any>error);
    }
    if (!this.displayKeywords) {
          this.displayKeywords = !this.displayKeywords;
    }
  }

  selectGenre(item: Genre) {
    this.displayGenres = !this.displayGenres;
    if (item) {
      this.filterOptions.onGenreSelect(item);
    }
  }

  selectKeyword(keyword: Keyword) {
    this.displayKeywords = !this.displayKeywords;
    if (keyword) {
      this.filterOptions.onKeywordSelect(keyword);
      this.keywordsSearch = '';
    }
  }
}

function setYears() {
  let years = [];
  for (let i = 2017; i > 1899; i--) {
    years.push(i);
  }
  return years;
}
