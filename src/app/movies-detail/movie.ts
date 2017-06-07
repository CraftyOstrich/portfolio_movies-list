import {ICreator} from "./creator";

export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  overview: string;
  vote_count?: number;
  popularity: number;
  video?: boolean;
  adult?: boolean;
  original_language?: string;
  original_title?: string;
  creators: ICreator[];
}
