import { Component, OnInit, Directive, ElementRef, AfterContentChecked, ContentChild, Input } from '@angular/core';

export interface LoaderConfig {
  loaderBgColor?: string;
  loaderColor?: string;
  loaderSize?: number;
}

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[aps-loader-content]' })
export class ApsLoaderContentDirective { constructor(public elRef: ElementRef) { } }

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'aps-loader',
  styles: [`
  .loader-backdrop { position: absolute; z-index: 1000; display: table; }

  .loader-container { display: table-cell; vertical-align: middle; }

  .loader { text-align: center; }
  `],
  template: `
    <div class="loader-backdrop" *ngIf="isLoading" (window:resize)="onResize($event)" [ngStyle]="loaderBackdropStyle">
      <div class="loader-container">
        <div class="loader" [ngStyle]="loaderStyle">
          <span class="glyphicon glyphicon-cog animate-spin-slow" aria-hidden="true"></span>
        </div>
      </div>
    </div>
    <ng-content></ng-content>
  `
})
export class ApsLoaderComponent implements AfterContentChecked {
  @ContentChild(ApsLoaderContentDirective) content: ApsLoaderContentDirective;
  @Input() isLoading: boolean;
  @Input() loaderConfig: LoaderConfig;

  public loaderBackdropPosition: any;
  public loaderBackdropStyle: any;
  public loaderPosition: any;
  public loaderStyle: any;

  constructor() {
    this.isLoading = false;
    this.loaderConfig = {};
  }

  public ngAfterContentChecked() { this.setStyling(); }

  public onResize(event: Event) { this.setStyling(); }

  private setStyling() {
    const height = this.content.elRef.nativeElement.offsetHeight;
    const width = this.content.elRef.nativeElement.offsetWidth;

    const top = this.content.elRef.nativeElement.offsetTop;
    const left = this.content.elRef.nativeElement.offsetLeft;

    const size = (height > width ? width : height) * 0.4;
    const padding = size * 0.3;

    const bgColor = 'rgba(0,0,0,0.7)';
    const color = 'rgba(255,255,255,1)';

    this.loaderBackdropStyle = {
      'background-color': this.loaderConfig.loaderBgColor ? this.loaderConfig.loaderBgColor : bgColor,
      'height.px': height,
      'width.px': width,
      'top.px': top,
      'left.px': left,
    };

    this.loaderStyle = {
      'font-size.px': this.loaderConfig.loaderSize ? this.loaderConfig.loaderColor : size,
      'color': this.loaderConfig.loaderColor ? this.loaderConfig.loaderColor : color,
      'padding-top.px': padding
    };
  }
}
