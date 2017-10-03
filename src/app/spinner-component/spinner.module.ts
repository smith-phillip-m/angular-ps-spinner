import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent, LoadingContentDirective } from './spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpinnerComponent, LoadingContentDirective],
  exports: [SpinnerComponent, LoadingContentDirective]
})
export class SpinnerModule { }
