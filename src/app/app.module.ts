import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleModule } from './examples/example.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ExampleModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
