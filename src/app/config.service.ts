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

  // TODO: Refactor all hardcoded URLs
  defaultURL: string = 'https://api.themoviedb.org/3/';
  apiKey: string = '?api_key=5af1770915237b38ad8957ddff1b912f';

  configUrl: string = 'https://api.themoviedb.org/3/discover/movie?api_key=5af1770915237b38ad8957ddff1b912f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_original_language=ja';

  genreUrl: string = 'https://api.themoviedb.org/3/genre/movie/list?api_key=5af1770915237b38ad8957ddff1b912f&language=en-US';

  movieBuilder(year: string): void {
    var filterYear: string;
    
    if (year.length>4) // to handle date ranges
    {
      if(year.substr(0, 1) == '>')
      {
        filterYear = '&primary_release_date.gte=' + year.substring(2) + '-01-01';
      }
      else if(year.substr(0, 1) == '<')
      {
        filterYear = '&primary_release_date.lte=' + year.substring(2) + '-12-31';
      }
    }
    else if (year.length==4) // to handle specific year
    {
      filterYear = '&primary_release_year=' + year;
    }

    this.configUrl = this.defaultURL + 'discover/movie' + this.apiKey + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_original_language=ja' + filterYear;
    //console.log(this.configUrl);
  }

  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }

  getGenre() {
    return this.http.get<String[][]>(this.genreUrl);
  }

}