import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Config {
  page: number;
  total_results: number;
  total_pages: number;
  results: string[];
}

export interface MovieDetailsConfig {
  page: number;
  adult: string;
  backdrop_path: string;
  belongs_to_collection: string[];
  budget: number;
  genres: string[];
  homepage: string;
  id: number,
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  production_companies: string[],
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: string;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  // TODO: Refactor all hardcoded URLs
  configUrl: string = 'https://api.themoviedb.org/3/discover/movie?api_key=5af1770915237b38ad8957ddff1b912f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_original_language=ja';

  genreUrl: string = 'https://api.themoviedb.org/3/genre/movie/list?api_key=5af1770915237b38ad8957ddff1b912f&language=en-US';
  
  generateURL() {

  }

  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }

  getGenre() {
    return this.http.get<String[][]>(this.genreUrl);
  }

}