export interface IMovieVideo {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

export class MovieVideo implements IMovieVideo {
 public id: string;
 public iso_639_1: string;
 public iso_3166_1: string;
 public key: string;
 public name: string;
 public site: string;
 public size: number;
 public type: string;

  constructor (video: MovieVideo) {
    this.id = video.id;
    this.iso_639_1 = video.iso_639_1;
    this.iso_3166_1 = video.iso_3166_1;
    this.key = video.key;
    this.name = video.name;
    this.site = video.site;
    this.size = video.size;
    this.type = video.type;
  }
}
