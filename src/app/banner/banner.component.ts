import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {  }
  
  title: string = 'Movies for WEEBS'; // TODO: Move into proper data storage
  images = [
    'https://image.tmdb.org/t/p/original/uicia399gyMGE1smatJ41M0CtFx.jpg', 'https://image.tmdb.org/t/p/original/9DzVZK1tZmTFphef5hDU3oJyA4o.jpg',
    'https://image.tmdb.org/t/p/original/gnLydPCxdh1xmxW715HeGtL3xTi.jpg'
  ];

}