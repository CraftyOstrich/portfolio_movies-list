import {ICreator} from "./creator";

export interface IMovie {
  id: number;
  name: string;
  poster: string;
  year: number;
  rating: number;
  categories: string[];
  topic: string;
  creators: ICreator[];
}
