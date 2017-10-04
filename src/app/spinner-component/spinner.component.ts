import { Component, Input, Directive, AfterContentInit, ContentChild, ElementRef, AfterContentChecked } from '@angular/core';

// TODO: take in config object for loader properties

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[aps-loading-content]' })
export class LoadingContentDirective {
  constructor(public elRef: ElementRef) { }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'aps-loading',
  styles: [`
    .spinner-backdrop {
      position: absolute;
      z-index: 1000;
      display: table;
    }

    .spinner-container {
      display: table-cell;
      vertical-align: middle;
    }

    .spinner {
      text-align: center;
    }

    .animate-spin-fast {
      animation: spin 1.5s linear infinite;
    }

    .animate-spin {
      animation: spin 2.5s linear infinite;
    }

    .animate-spin-slow {
      animation: spin 3s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `],
  template: `
    <div>
      <div *ngIf="isLoading" (window:resize)="onResize($event)">
        <div class="spinner-backdrop" [ngStyle]="spinnerBackdropStyle">
          <div class="spinner-container">
            <div class="spinner" [ngStyle]="spinnerStyle">
              <span class="glyphicon glyphicon-cog animate-spin-slow" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </div>
      <ng-content></ng-content>
    </div>
  `
})
export class SpinnerComponent implements AfterContentInit, AfterContentChecked {
  @ContentChild(LoadingContentDirective) content: LoadingContentDirective;
  @Input() isLoading: boolean;
  @Input() bgColor: string;
  @Input() color: string;
  @Input() size: number;

  public spinnerBackdropStyle: any;
  public spinnerStyle: any;

  private height: number;
  private width: number;
  private padding: number;

  public ngAfterContentInit() {
    this.isLoading = false;
    this.bgColor = 'rgba(0,0,0,0.7)';
    this.color = 'rgba(255,255,255,1)';
    this.setStyling();
  }

  public ngAfterContentChecked() {
    this.setStyling();
  }

  public onResize(event: Event) {
    this.setStyling();
  }

  private setStyling() {
    this.height = this.content.elRef.nativeElement.offsetHeight;
    this.width = this.content.elRef.nativeElement.offsetWidth;

    this.size = (this.height > this.width ? this.width : this.height) * 0.4;
    this.padding = this.size * 0.3;

    this.spinnerBackdropStyle = {
      'height.px': this.height,
      'width.px': this.width,
      'background-color': this.bgColor
    };

    this.spinnerStyle = {
      'font-size.px': this.size,
      'color': this.color,
      'padding-top.px': this.padding
    };
  }
}
