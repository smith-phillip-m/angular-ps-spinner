import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BootstrapV3Module } from './examples/bootstrap-v3/bootstrap-v3.module';

@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    BrowserModule,
    BootstrapV3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
