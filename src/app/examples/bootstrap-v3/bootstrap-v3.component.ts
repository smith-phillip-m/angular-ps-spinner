import { Component} from '@angular/core';

import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-bootstrap-v3',
  template: `
    <h2> Bootstrap V3 Example </h2>

    <div class="margin-v">
      <button class="btn btn-info btn-lg btn-block" (click)="isLoading=!isLoading"> Load Content </button>
    </div>

    <blockquote class="sigmar">
      <h3> Grid </h3>
    </blockquote>
    <div class="margin-v">
      <app-grid [isLoading]="isLoading"></app-grid>
    </div>

    <blockquote class="sigmar">
      <h3> Table </h3>
    </blockquote>
    <div class="margin-v">
      <app-table [isLoading]="isLoading"></app-table>
    </div>

    <blockquote class="sigmar">
      <h3> Button Types </h3>
    </blockquote>
    <div class="margin-v">
      <app-button-types [isLoading]="isLoading"></app-button-types>
    </div>

    <blockquote class="sigmar">
      <h3> Button Sizes </h3>
    </blockquote>
    <div class="margin-v">
      <app-button-sizes [isLoading]="isLoading"></app-button-sizes>
    </div>
  `
})
export class BootstrapV3Component {
  public isLoading: boolean;

  constructor() { this.isLoading = false; }
}
