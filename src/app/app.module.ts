import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MousePositionComponent } from './mouse-position/mouse-position.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { RangeComponent } from './range/range.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    InfoBoxComponent,
    MousePositionComponent,
    TitleBoxComponent,
    RangeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AboutModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
