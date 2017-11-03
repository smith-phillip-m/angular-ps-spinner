import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent, LoadingContentDirective } from './spinner.component';
import { LoadersModule } from '../loaders/loaders.module';

@NgModule({
  imports: [CommonModule, LoadersModule],
  declarations: [SpinnerComponent, LoadingContentDirective],
  exports: [SpinnerComponent, LoadingContentDirective]
})
export class SpinnerModule { }
