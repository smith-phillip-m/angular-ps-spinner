import { Component, Input } from '@angular/core';
import { LoaderConfig } from '../../../aps-loader/_defs/loader-config';

@Component({
  selector: 'app-table',
  template: `
    <aps-loader [isLoading]="isLoading" [loaderConfig]="loaderConfig">
      <table class="table table-striped table-hover" aps-loader-content>
        <tr>
          <th *ngFor="let header of headers"> {{ header }} </th>
        </tr>
        <tr *ngFor="let content of contents">
          <td *ngFor="let element of content"> {{ element }} </td>
        </tr>
      </table>
    </aps-loader>
  `
})
export class TableComponent {
  @Input() isLoading: boolean;
  @Input() loaderConfig: LoaderConfig;

  public headers: string[];
  public contents: string[][];

  constructor() {
    this.isLoading = false;
    this.loaderConfig = {};
    // tslint:disable-next-line:max-line-length
    const lorem = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Etiam bibendum venenatis laoreet Proin sed vulputate urna non venenatis sapien Mauris non dapibus justo Cras sagittis venenatis ex vel facilisis orci blandit in Proin lobortis risus eu mi egestas eleifend Suspendisse pretium justo vitae eros placerat vulputate et eu enim Aenean lacinia tellus sapien nec pharetra';
    const loremSplit: string[] = lorem.split(' ');

    this.headers = [];
    this.contents = [];

    let arr: string[] = [];
    for (let i = 0; i < loremSplit.length; i++) {
      if (i > 4) {
        arr.push(loremSplit[i]);
        if ((i + 1) % 5 === 0) {
          this.contents.push(arr);
          arr = [];
        }
      }
      else {
        this.headers.push(loremSplit[i]);
      }
    }
  }
}
