import { TsFundamentalsPage } from './../../../../../ts-fundamentals/e2e/app.po';
import { Component, OnInit, Directive } from '@angular/core';

@Component({
  selector: 'app-bootstrap-v3',
  template: `
    <div class="container">

      <div class="margin-h">
        <button class="btn btn-info btn-lg btn-block" (click)="isLoading=!isLoading"> Load Content </button>
      </div>

      <div class="margin-h">
        <aps-loading [isLoading]="isLoading">
          <table class="table table-striped table-hover" aps-loading-content>
            <tr>
              <th *ngFor="let header of headers"> {{ header }} </th>
            </tr>
            <tr *ngFor="let content of contents">
              <td *ngFor="let element of content"> {{ element }} </td>
            </tr>
          </table>
        </aps-loading>
      </div>
    </div>
  `
})
export class BootstrapV3Component implements OnInit {

  public headers: string[];
  public contents: string[][];

  public isLoading: boolean;

  constructor() {
    this.isLoading = false;
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
      // tslint:disable-next-line:one-line
      else {
        this.headers.push(loremSplit[i]);
      }
    }

  }

  ngOnInit() { }

}
