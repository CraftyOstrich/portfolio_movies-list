import { Component, OnInit } from '@angular/core';
import {MovieCast} from "../../../models/work";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  showMovie: string = 'movie';
  showSerial: string = 'serial';
  showMovies: boolean = true;
  showTVs: boolean = false;
  movie: any = {
    "adult": false,
    "character": "Captain Jack Sparrow",
    "credit_id": "52fe431cc3a36847f803af13",
    "id": 1865,
    "original_title": "Pirates of the Caribbean: On Stranger Tides",
    "poster_path": "/wNUDAq5OUMOtxMlz64YaCp7gZma.jpg",
    "release_date": "2011-05-14",
    "title": "Pirates of the Caribbean: On Stranger Tides"
  };
  tv: any = {
    "character": "fdsdsdaz",
    "credit_id": "525708b1760ee3776a047952",
    "episode_count": 1,
    "first_air_date": "2003-01-26",
    "id": 1489,
    "name": "Jimmy Kimmel Live!",
    "original_name": "Jimmy Kimmel Live!",
    "poster_path": "/hs35wiiaNq34wvo4wd9xByKDcHH.jpg"
  };
  crewMovie: any = {
    "adult": false,
    "credit_id": "53b764010e0a2676b8006499",
    "department": "Directing",
    "id": 280411,
    "job": "Director",
    "original_title": "These Vagabond Shoes",
    "poster_path": "/eoaskmEZEMErCBvz9hZnaUOqy8Q.jpg",
    "release_date": "2009-07-23",
    "title": "These Vagabond Shoes",
    "media_type": "movie"
  };
  crewTVs: any = {
    "credit_id": "571e15059251412afa001096",
    "department": "Directing",
    "episode_count": 3,
    "first_air_date": "2009-09-10",
    "id": 18165,
    "job": "Director",
    "name": "The Vampire Diaries",
    "original_name": "The Vampire Diaries",
    "poster_path": "/vfF7IiyTar1ngfsd6n13LgFn9MD.jpg"
  };

  constructor() {
  }

  ngOnInit() {
  }

  displayTable(arg: string) {
    if (arg === 'movie') {
      this.showMovies = true;
      this.showTVs = false;
    } else if (arg === 'serial') {
      this.showMovies = false;
      this.showTVs = true;
    }
  }
}
