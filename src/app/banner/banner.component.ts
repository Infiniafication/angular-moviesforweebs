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

}