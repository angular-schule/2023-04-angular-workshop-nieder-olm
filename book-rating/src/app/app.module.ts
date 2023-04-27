import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule, Configuration } from './books/shared/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BooksModule,
    HttpClientModule,
    // ApiModule.forRoot(() => new Configuration({
    //   basePath: 'https://api.angular.schule'
    // }))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
