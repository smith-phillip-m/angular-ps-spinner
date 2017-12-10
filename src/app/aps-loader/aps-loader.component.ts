import { Component, OnInit, Directive, ElementRef, AfterContentChecked, ContentChild, Input } from '@angular/core';
import { LoaderConfig } from './_defs/loader-config';
import { LoaderTypeEnum } from './_defs/loader-type';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[aps-loader-content]' })
export class ApsLoaderContentDirective { constructor(public elRef: ElementRef) { } }

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'aps-loader',
  styles: [`
    .loader-backdrop { position: absolute; z-index: 1000; display: table; }
    .loader-container { display: table-cell; vertical-align: middle; }
  `],
  template: `
    <div class="loader-backdrop" *ngIf="isLoading" (window:resize)="onResize($event)" [ngStyle]="loaderBackdropStyle">
      <div class="loader-container" [ngSwitch]="loaderConfig.loaderType" [ngStyle]="loaderContainerStyle">
        <aps-cog *ngSwitchCase="loaderType.COG" [loaderConfig]="loaderConfig"></aps-cog>
        <div *ngSwitchDefault> No loader selected... </div>
      </div>
    </div>
    <ng-content></ng-content>
  `
})
export class ApsLoaderComponent implements AfterContentChecked {
  @ContentChild(ApsLoaderContentDirective) content: ApsLoaderContentDirective;
  @Input() isLoading: boolean;
  @Input() loaderConfig: LoaderConfig;

  public loaderBackdropStyle: any;
  public loaderContainerStyle: any;
  public loaderType: {};

  constructor() {
    this.isLoading = false;
    this.loaderConfig = {};
    this.loaderType = LoaderTypeEnum;
  }

  public ngAfterContentChecked() { this.setStyling(); }

  public onResize(event: Event) { this.setStyling(); }

  private setStyling() {
    const height = this.content.elRef.nativeElement.offsetHeight;
    const width = this.content.elRef.nativeElement.offsetWidth;

    const top = this.content.elRef.nativeElement.offsetTop;
    const left = this.content.elRef.nativeElement.offsetLeft;

    this.loaderBackdropStyle = {
      'background-color': this.loaderConfig.loaderBgColor,
      'height.px': height,
      'width.px': width,
      'top.px': top,
      'left.px': left,
    };

    const size = (height > width ? width : height) * 0.4;

    this.loaderContainerStyle = {
      'height.px': size,
      'width.px': size
    };
  }
}
