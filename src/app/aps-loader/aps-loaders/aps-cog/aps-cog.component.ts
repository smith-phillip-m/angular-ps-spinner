import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { LoaderConfig } from '../../_defs/loader-config';
import { LoaderSpeedEnum } from './../../_defs/loader-speed';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'aps-cog',
  styles: [`
    .animate-spin-fast { animation: spin 1.5s linear infinite; }
    .animate-spin-moderate { animation: spin 2.5s linear infinite; }
    .animate-spin-slow { animation: spin 3s linear infinite; }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `],
  template: `
    <svg height="100%" width="100%" viewBox="0 0 1 1" style="display: block;" [ngClass]="setAnimationClass()">
      <g [ngStyle]="cogStyle">
        <rect y=".375" width=".25" height=".25" rx=".0625" ry=".0625" stroke="none" />
        <rect y=".375" width=".25" height=".25" rx=".0625" ry=".0625" stroke="none" transform="rotate(45 .5,.5)" />
        <rect x=".375" width=".25" height=".25" rx=".0625" ry=".0625" stroke="none" />
        <rect x=".375" width=".25" height=".25" rx=".0625" ry=".0625" stroke="none" transform="rotate(45 .5,.5)" />
        <rect y=".375" width=".25" height=".25" rx=".0625" ry=".0625" stroke="none" transform="translate(.75,0)" />
        <rect y=".375" width=".25" height=".25" rx=".0625" ry=".0625" stroke="none" transform="rotate(45 .5,.5) translate(.75,0)" />
        <rect x=".375" width=".25" height=".25" rx=".0625" ry=".0625" stroke="none" transform="translate(0,.75)" />
        <rect x=".375" width=".25" height=".25" rx=".0625" ry=".0625" stroke="none" transform="rotate(45 .5,.5) translate(0,.75)" />
        <circle cx=".5" cy=".5" r=".3" fill="none" />
      </g>
    </svg>
  `
})
export class ApsCogComponent implements AfterContentChecked {
  @Input() loaderConfig: LoaderConfig;

  public cogStyle: any;

  constructor() {
    this.loaderConfig = {};
    this.cogStyle = {};
  }

  public ngAfterContentChecked() { this.setStyling(); }

  private setStyling() {
    this.cogStyle = {
      'fill': this.loaderConfig.loaderColor,
      'stroke': this.loaderConfig.loaderColor,
      'stroke-width.px': .2
    };
  }

  public setAnimationClass() {
    switch (this.loaderConfig.loaderSpeed) {
      case LoaderSpeedEnum.FAST:
        return 'animate-spin-fast';
      case LoaderSpeedEnum.MODERATE:
        return 'animate-spin-moderate';
      case LoaderSpeedEnum.SLOW:
        return 'animate-spin-slow';
      default:
        return ' ';
    }
  }
}
