import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Config {
  page: number;
  total_results: number;
  total_pages: number;
  results: string[];
}

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  // configUrl: string = 'https://api.themoviedb.org/3/genre/16/movies?api_key=5af1770915237b38ad8957ddff1b912f&language=en-US';

  configUrl: string = 'https://api.themoviedb.org/3/discover/movie?api_key=5af1770915237b38ad8957ddff1b912f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_original_language=ja';
  

  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }

}