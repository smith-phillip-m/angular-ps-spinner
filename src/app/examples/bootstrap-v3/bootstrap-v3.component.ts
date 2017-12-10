import { Component} from '@angular/core';

import { TableComponent } from './table/table.component';

import { LoaderConfig } from './../../aps-loader/_defs/loader-config';
import { LoaderTypeEnum } from '../../aps-loader/_defs/loader-type';
import { LoaderSpeedEnum } from '../../aps-loader/_defs/loader-speed';

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
      <app-grid [isLoading]="isLoading" [loaderConfig]="loaderConfig"></app-grid>
    </div>

    <blockquote class="sigmar">
      <h3> Table </h3>
    </blockquote>
    <div class="margin-v">
      <app-table [isLoading]="isLoading" [loaderConfig]="loaderConfig"></app-table>
    </div>

    <blockquote class="sigmar">
      <h3> Button Types </h3>
    </blockquote>
    <div class="margin-v">
      <app-button-types [isLoading]="isLoading" [loaderConfig]="loaderConfig"></app-button-types>
    </div>

    <blockquote class="sigmar">
      <h3> Button Sizes </h3>
    </blockquote>
    <div class="margin-v">
      <app-button-sizes [isLoading]="isLoading" [loaderConfig]="loaderConfig"></app-button-sizes>
    </div>
  `
})
export class BootstrapV3Component {
  public isLoading: boolean;
  public loaderConfig: LoaderConfig;

  constructor() {
    this.isLoading = false;
    this.loaderConfig = {
      loaderType: LoaderTypeEnum.COG,
      loaderBgColor: '#2e2e2e',
      loaderColor: '#eaeaea',
      loaderSpeed: LoaderSpeedEnum.MODERATE
    };
  }
}
