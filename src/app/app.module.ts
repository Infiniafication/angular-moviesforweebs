import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HottestComponent } from './hottest/hottest.component';
import { ConfigService } from './config.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, BannerComponent, HottestComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ConfigService]
})
export class AppModule { }
