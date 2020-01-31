import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HottestComponent } from './hottest/hottest.component';
import { ConfigService } from './config.service';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule, MatExpansionModule ],
  declarations: [ AppComponent, BannerComponent, HottestComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ConfigService]
})
export class AppModule { }
