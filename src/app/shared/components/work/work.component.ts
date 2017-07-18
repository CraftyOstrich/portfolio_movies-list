import { Component, OnInit, Input } from '@angular/core';
import { MovieCast, TvCast } from "../../../models/cast";
import { PersonJobs } from "../../../models/person-detail";
import { MovieCrew, TvCrew } from "../../../models/crew";
import { Router } from "@angular/router";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  @Input() jobs: PersonJobs;
  cast: (MovieCast | TvCast)[];
  crew: (MovieCrew | TvCrew)[];
  showMovie: string = 'movie';
  showSerial: string = 'tv';
  currentMediaType: string = 'movie';

  private _currentUrl: string = '';

  constructor(private _router: Router) {
  }

  ngOnInit() {
    this.onTypeChange(this.currentMediaType);
  }

  onTypeChange(mediaType: string) {
    this.cast = this.jobs.getCastByType(mediaType);
    this.crew = this.jobs.getCrewByType(mediaType);
    this.currentMediaType = mediaType;
    this._currentUrl = mediaType + '/detail';
  }

  goToWork(id: number) {
    this._router.navigate([this._currentUrl, id]);
  }
}
