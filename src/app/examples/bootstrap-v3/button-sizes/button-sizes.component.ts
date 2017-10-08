import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-sizes',
  template: `
    <aps-loader [isLoading]="isLoading">
      <button class="btn btn-default btn-xs" aps-loader-content=""> XS Button </button>
    </aps-loader>

    <aps-loader [isLoading]="isLoading">
      <button class="btn btn-primary btn-sm" aps-loader-content=""> SM Button </button>
    </aps-loader>

    <aps-loader [isLoading]="isLoading">
      <button class="btn btn-info" aps-loader-content=""> Default Button </button>
    </aps-loader>

    <aps-loader [isLoading]="isLoading">
      <button class="btn btn-warning btn-lg" aps-loader-content=""> LG Button </button>
    </aps-loader>

    <div class="margin-v">
      <aps-loader [isLoading]="isLoading">
        <button class="btn btn-danger btn-block" aps-loader-content=""> Block Button </button>
      </aps-loader>
    </div>
  `
})
export class ButtonSizesComponent {
  @Input() isLoading: boolean;

  constructor() {
    this.isLoading = false;
  }
}
