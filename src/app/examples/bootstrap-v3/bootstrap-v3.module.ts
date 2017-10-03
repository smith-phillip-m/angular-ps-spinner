import { SpinnerModule } from './../../spinner-component/spinner.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapV3Component } from './bootstrap-v3.component';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule
  ],
  declarations: [BootstrapV3Component],
  exports: [BootstrapV3Component]
})
export class BootstrapV3Module { }
