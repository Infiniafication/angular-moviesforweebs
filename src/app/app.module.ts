import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HottestComponent } from './hottest/hottest.component';
import { ConfigService } from './config.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatRippleModule,
    MatInputModule,
    MatSelectModule 
  ],
  declarations: [ AppComponent, BannerComponent, HottestComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ConfigService]
})
export class AppModule { }
