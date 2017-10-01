import { TsFundamentalsPage } from './../../../ts-fundamentals/e2e/app.po';
import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="margin">
         <input type="button" (click)="loading=!loading" value="Press Me" />
      </div>
<app-spinner-component [isSpinning]="loading">
      <div class="margin" LoadingContent>
        <table class="table">
          <tr>
            <th> One </th>
            <th> Two </th>
            <th> Three </th>
          </tr>
          <tr>
            <td> stuff </td>
            <td> also stuff </td>
            <td> moar stuffs </td>
          </tr>
          <tr>
            <td> stuff </td>
            <td> also stuff </td>
            <td> moar stuffs </td>
          </tr>
          <tr>
            <td> stuff </td>
            <td> also stuff </td>
            <td> moar stuffs </td>
          </tr>
          <tr>
            <td> stuff </td>
            <td> also stuff </td>
            <td> moar stuffs </td>
          </tr>
        </table>
      </div>
</app-spinner-component>

<div>
<app-spinner-component [isSpinning]="loading" class="margin">
  <button LoadingContent class="btn btn-primary"> Button </button>
  </app-spinner-component>
</div>
<div>
  <app-spinner-component [isSpinning]="loading" class="margin">
      <input LoadingContent class="btn btn-info" type="button" value="Button" />
  </app-spinner-component>
</div>
<app-spinner-component [isSpinning]="loading" class="margin">
      <div LoadingContent style="height: 20rem; width: 100%; background-color: red;">
        ninja
      </div>
</app-spinner-component>

      <!-- <app-spinner-component [isSpinning]="loading"></app-spinner-component> -->

    </div>
  `
})
export class AppComponent {
  public loading: boolean;

  constructor() {
    this.loading = false;
  }
}
