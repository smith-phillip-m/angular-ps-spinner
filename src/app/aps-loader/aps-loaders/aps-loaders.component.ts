import { Component, OnInit, Input } from '@angular/core';

type LoaderType = 'cog' | 'default';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'aps-loaders',
  template: `
    <div *ngSwitch="loader">
      <div *ngSwitchCase="'loader'"> Loader goes here... </div>
    </div>
  `
})
export class ApsLoadersComponent { @Input() loader: LoaderType; }
