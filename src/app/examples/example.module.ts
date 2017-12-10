import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapV3Module } from './bootstrap-v3/bootstrap-v3.module';

import { ExampleComponent } from './example.component';

@NgModule({
  imports: [CommonModule, BootstrapV3Module],
  declarations: [ExampleComponent],
  exports: [ExampleComponent]
})
export class ExampleModule { }
