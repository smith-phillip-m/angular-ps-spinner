import { TsFundamentalsPage } from './../../../ts-fundamentals/e2e/app.po';
import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-bootstrap-v3></app-bootstrap-v3>
  `
})
export class AppComponent {
  public loading: boolean;

  constructor() {
    this.loading = false;
  }
}
