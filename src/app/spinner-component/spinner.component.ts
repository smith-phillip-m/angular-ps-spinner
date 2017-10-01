import { Component, Input, Directive, AfterContentInit, ContentChild, ElementRef } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[LoadingContent]' })
export class LoadingContentDirective {
  public element: ElementRef;
  constructor(private elRef: ElementRef) { this.element = elRef; }
}

@Component({
  selector: 'app-spinner-component',
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

    .foo {
      animation: spin 2.5s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `],
  template: `
    <div>
      <div *ngIf="isSpinning" (window:resize)="onResize($event)">
        <div class="spinner-backdrop" [ngStyle]="spinnerBackdropStyle">
          <div class="spinner-container">
            <div class="spinner" [ngStyle]="spinnerStyle">
              <span class="glyphicon glyphicon-star foo" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </div>
      <ng-content></ng-content>
    </div>
  `
})
export class SpinnerComponent implements AfterContentInit {
  @ContentChild(LoadingContentDirective) content: LoadingContentDirective;
  @Input() isSpinning: boolean;
  @Input() bgColor: string;
  @Input() color: string;
  @Input() size: number;

  public spinnerBackdropStyle: any;
  public spinnerStyle: any;

  private height: number;
  private width: number;
  private padding: number;

  public ngAfterContentInit() {
    this.isSpinning = false;
    this.bgColor = 'rgba(0,0,0,0.7)';
    this.color = 'rgba(255,255,255,1)';
    this.setStyling();
    console.log(this.content.element)
  }

  public onResize(event: Event) {
    this.setStyling();
  }

  private setStyling() {
    this.height = this.content.element.nativeElement.offsetHeight;
    this.width = this.content.element.nativeElement.offsetWidth;

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
