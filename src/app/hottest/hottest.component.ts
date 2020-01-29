import { Component, OnInit } from '@angular/core';
import { Config, ConfigService } from '../config.service';

@Component({
  selector: 'app-hottest',
  templateUrl: './hottest.component.html',
  styleUrls: ['./hottest.component.css']
})
export class HottestComponent implements OnInit {

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.getMovies();
  }

  movies: Config;

  getMovies() {
    this.configService.getConfig().subscribe((data) => this.movies = data);
  }

}