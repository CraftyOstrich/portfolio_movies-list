import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { LoginService } from './login.service';
import { MoviesService } from './movies.service';
import { PeopleService } from './people.service';
import { SearchService } from './search.service';
import { TvsService } from './tvs.service';
import { ErrorService } from './error.service';
import { GenresService } from './genres.service';

export const SHARED_SERVICES = [
  MoviesService,
  TvsService,
  PeopleService,
  SearchService,
  LoginService,
  AuthGuardService,
  AuthService,
  ErrorService,
  GenresService
];

export * from './auth.service';
export * from './auth-guard.service';
export * from './login.service';
export * from './movies.service';
export * from './people.service';
export * from './search.service';
export * from './tvs.service';
export * from './error.service';
export * from './genres.service';

