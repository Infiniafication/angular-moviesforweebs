import { Component, OnInit } from '@angular/core';
import { List, ConfigService } from '../config.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor( private configService: ConfigService ) { }

  ngOnInit() { this.getBanner(); }
  
  title: string = 'Movies for WEEBS'; // TODO: Move into proper data storage
  images = [
    'https://image.tmdb.org/t/p/original/uicia399gyMGE1smatJ41M0CtFx.jpg', 'https://image.tmdb.org/t/p/original/9DzVZK1tZmTFphef5hDU3oJyA4o.jpg',
    'https://image.tmdb.org/t/p/original/gnLydPCxdh1xmxW715HeGtL3xTi.jpg'
  ];

  movieList: List;

  getBanner() {
    this.configService.getBanner().subscribe((data) => this.movieList = data);
    console.log(this.movieList);
  }

}