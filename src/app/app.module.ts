import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpinnerComponent, LoadingContentDirective } from './spinner-component/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    LoadingContentDirective
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
