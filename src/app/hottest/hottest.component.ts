import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Config, ConfigService } from '../config.service';

@Component({
  selector: 'app-hottest',
  templateUrl: './hottest.component.html',
  styleUrls: ['./hottest.component.css']
})
export class HottestComponent implements OnInit {
  constructor( private configService: ConfigService ) { }

  movies: Config;
  genres: String[][];
  filters = new FormControl();
  filterList: string[] = ['> 2020', '2019', '2018', '2017', '2016', '2015', '< 2014'];
  selected = '2019';

  ngOnInit() {
    this.getMovies();
    this.getGenres();
  }

  getMovies() {
    this.configService.getConfig().subscribe((data) => this.movies = data);
  }

  getGenres() {
    this.configService.getGenre().subscribe((data) => this.genres = data);
  }

  onFilterChange(event) {
    if(event.source.selected)
    {
      this.configService.movieBuilder(event.source.value);
      this.getMovies();
    }
  }

}