import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Config, ConfigService } from '../config.service';

@Component({
  selector: 'app-hottest',
  templateUrl: './hottest.component.html',
  styleUrls: ['./hottest.component.css']
})
export class HottestComponent implements OnInit {
  @ViewChild('stickyNav', {static: false}) menuElement: ElementRef;

  constructor( private configService: ConfigService ) { }

  movies: Config;
  genres: String[][];
  filters = new FormControl();
  filterList: string[] = ['> 2020', '2019', '2018', '2017', '2016', '2015', '< 2014'];
  selected = '2019';

  sticky: boolean = false;
  elementPosition: any;

  ngOnInit() {
    this.getMovies();
    this.getGenres();
  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
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

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }

}