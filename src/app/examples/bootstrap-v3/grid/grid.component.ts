import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  styles: [`
    .demo {
      height: 100px;
      padding: 40px;
    }
  `],
  template: `
    <div class="container">
      <div class="row margin-v">
        <aps-loader [isLoading]="isLoading">
          <div class="col-md-4 bg-danger text-center demo" aps-loader-content> Column 1 </div>
        </aps-loader>
        <aps-loader [isLoading]="isLoading">
          <div class="col-md-4 bg-warning text-center demo" aps-loader-content> Column 2 </div>
        </aps-loader>
        <aps-loader [isLoading]="isLoading">
          <div class="col-md-4 bg-primary text-center demo" aps-loader-content> Column 3 </div>
        </aps-loader>
      </div>

      <div class="row margin-v">
        <aps-loader [isLoading]="isLoading">
          <div class="col-md-4 col-md-offset-4 bg-info text-center demo" aps-loader-content> Column With Offset</div>
        </aps-loader>
      </div>

      <aps-loader [isLoading]="isLoading">
        <div class="row margin-v" aps-loader-content>
          <div class="col-md-4 bg-warning text-center demo"> Column 1 </div>
          <div class="col-md-4 bg-danger text-center demo"> Column 2 </div>
          <div class="col-md-4 bg-primary text-center demo"> Column 3 </div>
        </div>
      </aps-loader>
    </div>
  `
})
export class GridComponent {
  @Input() isLoading: boolean;

  constructor() {
    this.isLoading = false;
  }
}
