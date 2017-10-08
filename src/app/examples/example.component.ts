import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  styles: [`
  .nav-container {
    border-left: solid 8px rgba(0,0,0,0.3);
    border-right: solid 8px rgba(0,0,0,0.3);
    border-radius: 8px;
    width: 100%;
    height: 54px;
    background-color: rgba(204,255,144,0.8);
    color: rgba(127.5,127.5,127.5,1);
  }

  .nav-brand, .nav-link {
    color: black;
    height: 100%;
    padding: 0 2rem;
    cursor: pointer;
  }

  .nav-brand {
    font-size: 36px;
    float: left;
    padding-top: 0;
    padding-bottom: 4rem;
  }

  .nav-link {
    font-size: 22px;
    float: right;
    padding-top: 2.25rem;
  }

  .bootstrap {
    background-color: rgba(94, 53, 177,0.8);
    color: rgba(255,255,255,1)
  }
`],
template: `
  <div class="container">
    <div class="nav-container margin-v">
      <div class="nav-brand bold italics annie"> {{ appName }} </div>
      <div class="nav-link bold patrick" (click)="toggle()"> Home </div>
      <div class="nav-link bold patrick bootstrap" (click)="toggle('bootstrap3')"> Bootstrap </div>
    </div>

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
export class ExampleComponent {
  public showHome: boolean;
  public showBootstrap3: boolean;
  public showMaterialize: boolean;
  public showFontAwesome: boolean;
  public appName: string;

  constructor() {
    this.showHome = true;
    this.showBootstrap3 = false;
    this.showMaterialize = false;
    this.showFontAwesome = false;
    this.appName = '{{ angular-ps-loader }}';
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
