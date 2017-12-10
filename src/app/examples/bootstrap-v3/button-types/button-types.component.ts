import { Component, Input } from '@angular/core';
import { LoaderConfig } from '../../../aps-loader/_defs/loader-config';

@Component({
  selector: 'app-button-types',
  template: `
    <aps-loader [isLoading]="isLoading" [loaderConfig]="loaderConfig">
      <a href="" class="btn btn-default" role="button" aps-loader-content> Link </a>
    </aps-loader>

    <aps-loader [isLoading]="isLoading" [loaderConfig]="loaderConfig">
      <button class="btn btn-default" aps-loader-content> Button </button>
    </aps-loader>

    <aps-loader [isLoading]="isLoading" [loaderConfig]="loaderConfig">
      <input type="text" class="btn btn-default" value="Input" aps-loader-content />
    </aps-loader>
  `
})
export class ButtonTypesComponent {
  @Input() isLoading: boolean;
  @Input() loaderConfig: LoaderConfig;

  constructor() {
    this.isLoading = false;
    this.loaderConfig = {};
  }
}
