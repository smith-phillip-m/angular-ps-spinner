import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-types',
  template: `
    <aps-loader [isLoading]="isLoading">
      <a href="" class="btn btn-default" role="button" aps-loader-content=""> Link </a>
    </aps-loader>

    <aps-loader [isLoading]="isLoading">
      <button class="btn btn-default" aps-loader-content> Button </button>
    </aps-loader>

    <aps-loader [isLoading]="isLoading">
      <input type="text" class="btn btn-default" value="Input" aps-loader-content />
    </aps-loader>
  `
})
export class ButtonTypesComponent {
  @Input() isLoading: boolean;

  constructor() {
    this.isLoading = false;
  }
}
