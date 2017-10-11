import { Component, OnInit, Input } from '@angular/core';
import { MovieCast, TvCast } from '../../../models/cast';
import { PersonJobs } from '../../../models/person-detail';
import { MovieCrew, TvCrew } from '../../../models/crew';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  /**
   * Person jobs
   */
  @Input() public jobs: PersonJobs;
  /**
   * Movies and tvs list, where person was filmed
   */
  public cast: (MovieCast | TvCast)[];
  /**
   * Movies and tvs list, which person was filmed
   */
  public crew: (MovieCrew | TvCrew)[];
  /**
   * On change type of show works on movie
   * @type {string}
   */
  public showMovie = 'movie';
  /**
   * On change type of show works on tv
   * @type {string}
   */
  public showSerial = 'tv';
  /**
   * Current type of show works
   * @type {string}
   */
  public currentMediaType = 'movie';
  /**
   * Current url
   * @type {string}
   * @private
   */
  private _currentUrl = '';

  constructor(private _router: Router) {
  }

  ngOnInit() {
    this.onTypeChange(this.currentMediaType);
  }

  /**
   * On type change
   * @param mediaType
   */
  public onTypeChange(mediaType: string) {
    this.cast = this.jobs.getCastByType(mediaType);
    this.crew = this.jobs.getCrewByType(mediaType);
    this.currentMediaType = mediaType;
    this._currentUrl = mediaType + '/detail';
  }

  /**
   * navigate to movie or tv
   * @param id
   */
  public goToWork(id: number) {
    this._router.navigate([this._currentUrl, id]);
  }
}
