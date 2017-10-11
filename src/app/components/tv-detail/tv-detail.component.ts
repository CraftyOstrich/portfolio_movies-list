import { Component, OnInit } from '@angular/core';
import { TvDetail } from '../../models/tv-detail';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TvsService } from '../../shared/services/tvs.service';
import { Genre } from '../../models/genre';
import { Tv } from '../../models/tv';
import { Character } from '../../models/character';
import { Creator } from '../../models/creator';
import { Keyword } from '../../models/keyword';
import { Network } from '../../models/network';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Video } from '../../models/video';
import { API_CONFIG } from '../../app-config';

@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.scss']
})
export class TvDetailComponent implements OnInit {
  /**
   * Current tv
   * @type {TvDetail}
   */
  public tv: TvDetail;
  /**
   * Current tv's genres
   * @type {Genre[]}
   */
  public genres: Genre[];
  /**
   * Similar to current tv
   * @type {Array}
   */
  public tvSimilar: Tv[] = [];
  /**
   * Videos for current tv
   * @type {Array}
   */
  public tvVideos: Video[] = [];
  /**
   * Current tv's characters
   * @type {Array}
   */
  public tvCharacters: Character[] = [];
  /**
   * Current tv's creators
   * @type {Array}
   */
  public tvCreators: Creator[] = [];
  /**
   * Current tv's keywords
   * @type {Array}
   */
  public tvKeywords: Keyword[] = [];
  /**
   * Current tv's networks
   * @type {Array}
   */
  public tvNetworks: Network[] = [];
  /**
   * Part of current page's link
   * @type {string}
   * @private
   */
  private _currentLink = '/tv/';
  /**
   * Error message
   */
  private _errorMessage: string;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _tvsService: TvsService,
              private _sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        const id = +params['id'];
        this._tvsService.getSerial(this._currentLink, id).subscribe((tv: TvDetail) => {
          this.tv = tv;
          this.genres = tv.genres;
          this.tvNetworks = tv.networks;
          this.tvCreators = tv.created_by;
        });
        this._tvsService.getKeywords(this._currentLink, id, API_CONFIG.URL_KEYWORDS).subscribe((response) => {
          this.tvKeywords = response.results || [];
        });
        this._tvsService.getPeople(this._currentLink, id, API_CONFIG.URL_PEOPLE).subscribe((response) => {
          this.tvCharacters = response.cast.slice(0, 5) || [];

        });
        this._tvsService.getSimilarSerials(this._currentLink, id, API_CONFIG.URL_SIMILAR).subscribe((response) => {
          this.tvSimilar = response.results || [];
        });
        this._tvsService.getVideos(this._currentLink, id, API_CONFIG.URL_VIDEO).subscribe((response) => {
          this.tvVideos = response.results.slice(0, 1) || [];
        });
      },
      error => this._errorMessage = <any>error);
  }

  /**
   * Navigate to actor
   * @param id
   */
  public goToActor(id: number) {
    this._router.navigate(['person', id]);
  }

  /**
   * Navigate to similar tv
   * @param id
   */
  public goToSimilar(id: number) {
    this._router.navigate(['tv/detail', id]);
  }

  /**
   * Sanitize video url
   * @param url
   * @returns {SafeResourceUrl}
   */
  public sanitizeUrl(url: string): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + url);
  }
}
