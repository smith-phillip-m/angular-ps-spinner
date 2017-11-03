import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-cog',
  styles: [`
    .container {
      position: relative;
      z-index: 1000;
      border-radius: 50%;
    }

    .gear-face {
      position: absolute;
      z-index: 1002;
      height: 60%;
      width: 60%;
      top: 20%;
      left: 20%;
      border-radius: 50%;
    }

    .gear-center {
      position: absolute;
      z-index: 1003;
      height: 35%;
      width: 35%;
      top: 32.5%;
      left: 32.5%;
      border-radius: 50%;
    }

    .tooth {
      position: absolute;
      z-index: 1000;
      height: 12.5%;
      width: 12.5%;
      border-radius: 30% 0 0 30%;
    }

    .tooth1 {
      top: 43.25%;
      left: 10%;
    }

    .tooth2 {
      top: 21%;
      left: 19%;
      transform: rotate(45deg);
    }

    .tooth3 {
      top: 10%;
      left: 43.25%;
      transform: rotate(90deg);
    }

    .tooth4 {
      top: 21%;
      right: 19%;
      transform: rotate(135deg);
    }

    .tooth5 {
      top: 43.25%;
      right: 10%;
      transform: rotate(180deg);
    }

    .tooth6 {
      bottom: 21%;
      right: 19%;
      transform: rotate(225deg);
    }

    .tooth7 {
      bottom: 10%;
      left: 43.25%;
      transform: rotate(270deg);
    }

    .tooth8 {
      bottom: 21%;
      left: 19%;
      transform: rotate(315deg);
    }
  `],
  template: `
    <div class="container animate-spin-slow" [ngStyle]="containerStyle">
      <div class="gear-face" [ngStyle]="gearFaceStyle"></div>
      <div class="gear-center" [ngStyle]="gearCenterStyle"></div>
      <div class="tooth tooth1" [ngStyle]="toothStyle"></div>
      <div class="tooth tooth2" [ngStyle]="toothStyle"></div>
      <div class="tooth tooth3" [ngStyle]="toothStyle"></div>
      <div class="tooth tooth4" [ngStyle]="toothStyle"></div>
      <div class="tooth tooth5" [ngStyle]="toothStyle"></div>
      <div class="tooth tooth6" [ngStyle]="toothStyle"></div>
      <div class="tooth tooth7" [ngStyle]="toothStyle"></div>
      <div class="tooth tooth8" [ngStyle]="toothStyle"></div>
    </div>
  `
})
export class CogComponent implements OnChanges {
  @Input() config: any;

  public containerStyle: any;
  public gearFaceStyle: any;
  public gearCenterStyle: any;
  public toothStyle: any;

  constructor() { this.config = {}; }

  ngOnChanges() { this.setStyling(); }

  private setStyling(): void {
    const height = this.config.height;
    const width = this.config.width;

    const color = this.config.color;
    const backgroundColor = this.config.backgroundColor;

    this.containerStyle = {
      'height.px': height,
      'width.px': width
    };

    this.gearFaceStyle = { 'background-color': color };

    this.gearCenterStyle = { 'background-color': backgroundColor };

    this.toothStyle = { 'background-color': color };
  }
}
