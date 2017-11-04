import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-cog',
  styles: [`
    .gear-container {
      position: relative;
      z-index: 1000;
      border-radius: 50%;
      margin: 0 auto;
    }

    .gear-face {
      position: absolute;
      z-index: 1002;
      height: 76%;
      width: 76%;
      top: 12%;
      left: 12%;
      border-radius: 50%;
    }

    .gear-center {
      position: absolute;
      z-index: 1003;
      height: 40%;
      width: 40%;
      top: 30%;
      left: 30%;
      border-radius: 50%;
    }

    .gear-tooth {
      position: absolute;
      z-index: 1000;
      height: 20%;
      width: 20%;
      border-radius: 30% 0 0 30%;
    }

    .gear-tooth1 {
      top: 40%;
      left: 2%;
    }

    .gear-tooth2 {
      top: 13%;
      left: 13%;
      transform: rotate(45deg);
    }

    .gear-tooth3 {
      top: 2%;
      left: 40%;
      transform: rotate(90deg);
    }

    .gear-tooth4 {
      top: 13%;
      right: 13%;
      transform: rotate(135deg);
    }

    .gear-tooth5 {
      top: 40%;
      right: 2%;
      transform: rotate(180deg);
    }

    .gear-tooth6 {
      bottom: 13%;
      right: 13%;
      transform: rotate(225deg);
    }

    .gear-tooth7 {
      bottom: 2%;
      left: 40%;
      transform: rotate(270deg);
    }

    .gear-tooth8 {
      bottom: 13%;
      left: 13%;
      transform: rotate(315deg);
    }
  `],
  template: `
    <div class="gear-container animate-spin-slow" [ngStyle]="containerStyle">
      <div class="gear-face" [ngStyle]="gearFaceStyle"></div>
      <div class="gear-center" [ngStyle]="gearCenterStyle"></div>
      <div class="gear-tooth gear-tooth1" [ngStyle]="toothStyle"></div>
      <div class="gear-tooth gear-tooth2" [ngStyle]="toothStyle"></div>
      <div class="gear-tooth gear-tooth3" [ngStyle]="toothStyle"></div>
      <div class="gear-tooth gear-tooth4" [ngStyle]="toothStyle"></div>
      <div class="gear-tooth gear-tooth5" [ngStyle]="toothStyle"></div>
      <div class="gear-tooth gear-tooth6" [ngStyle]="toothStyle"></div>
      <div class="gear-tooth gear-tooth7" [ngStyle]="toothStyle"></div>
      <div class="gear-tooth gear-tooth8" [ngStyle]="toothStyle"></div>
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
