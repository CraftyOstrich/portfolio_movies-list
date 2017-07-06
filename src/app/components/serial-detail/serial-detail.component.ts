import { Component, OnInit } from '@angular/core';
import {SeriesDetail} from "../../models/tv-detail";
import {ActivatedRoute} from "@angular/router";
import {SerialsService} from "../../shared/services/serials.service";
import {Genre} from "../../models/genre";
import {Tv} from "../../models/tv";
import {Character} from "../../models/character";
import {Creator} from "../../models/creator";
import {Keyword} from "../../models/keyword";
import {Network} from "../../models/network";
import {SafeResourceUrl, DomSanitizer} from "@angular/platform-browser";
import {Video} from "../../models/video";

@Component({
  selector: 'app-serial-detail',
  templateUrl: './serial-detail.component.html',
  styleUrls: ['./serial-detail.component.scss']
})
export class SerialDetailComponent implements OnInit {
  serial: SeriesDetail;
  genres: Genre[];
  serialsSimilar: Tv[] = [];
  serialVideos: Video[] = [];
  serialCharacters: Character[] = [];
  serialCreators: Creator[] = [];
  serialKeywords: Keyword[] = [];
  serialNetworks: Network[] = [];
  linkSimilar: string = '/similar';
  linkVideo: string = '/videos';
  linkPeople: string = '/credits';
  linkKeywords: string = '/keywords';
  link: string = '/tv/';

  constructor( private _route: ActivatedRoute, private _serialsService: SerialsService, private sanitizer: DomSanitizer ) { }

  ngOnInit() {
    let id = +this._route.snapshot.params['id'];
    this._serialsService.getSerial(this.link, id).subscribe((serial: SeriesDetail) => {
      this.serial = serial;
      this.genres = serial.genres;
      this.serialNetworks = serial.networks;
      this.serialCreators = serial.created_by;
    });
    this._serialsService.getKeywords(this.link, id, this.linkKeywords).subscribe((response) => {
      this.serialKeywords = response.results || [];
    });
    this._serialsService.getPeople(this.link, id, this.linkPeople).subscribe((response) => {
      this.serialCharacters = response.cast.slice(0, 5) || [];

    });
    this._serialsService.getSimilarSerials(this.link, id, this.linkSimilar).subscribe((response) => {
      this.serialsSimilar = response.results || [];
    });
    this._serialsService.getVideos(this.link, id, this.linkVideo).subscribe((response) => {
      this.serialVideos = response.results.slice(0, 3) || [];
    });
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + url);
  }
}
