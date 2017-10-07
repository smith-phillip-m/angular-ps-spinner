import { TsFundamentalsPage } from './../../../ts-fundamentals/e2e/app.po';
import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <nav class="navbar navbar-default margin-v">
        <div class="container-fluid">
          <div class="navbar-header" (click)="toggle('showhome')">
            <p class="navbar-brand annie bold italics text-3x"> {{ '{ angular-ps-loader }' }} </p>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li (click)="toggle('bootstrap3')">
                <p class="navbar-text patrick bold text-xl"> Bootstrap </p>
              </li>
              <li (click)="toggle('materialize')">
                <p class="navbar-text patrick bold text-xl"> Materialize </p>
              </li>
              <li (click)="toggle('fontawesome')">
                <p class="navbar-text patrick bold text-xl"> Font Awesome </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div *ngIf="showHome">
        home
      </div>

      <div *ngIf="showBootstrap3">
        <app-bootstrap-v3></app-bootstrap-v3>
      </div>

      <div *ngIf="showMaterialize">
        materialize
      </div>

      <div *ngIf="showFontAwesome">
        fontawesome
      </div>

    </div>
  `
})
export class AppComponent {
  public showHome: boolean;
  public showBootstrap3: boolean;
  public showMaterialize: boolean;
  public showFontAwesome: boolean;

  constructor() {
    this.showHome = true;
    this.showBootstrap3 = false;
    this.showMaterialize = false;
    this.showFontAwesome = false;
  }

  public toggle(str: string): void {
    this.showHome = false;
    this.showBootstrap3 = false;
    this.showMaterialize = false;
    this.showFontAwesome = false;

    switch (str) {
      case 'showhome':
        this.showHome = true;
        break;
      case 'bootstrap3':
        this.showBootstrap3 = true;
        break;
      case 'materialize':
        this.showMaterialize = true;
        break;
      case 'fontawesome':
        this.showFontAwesome = true;
        break;
      default:
        this.showHome = true;
        break;
    }
  }
}
