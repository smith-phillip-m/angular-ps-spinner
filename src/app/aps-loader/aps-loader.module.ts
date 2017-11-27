import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApsLoaderComponent, ApsLoaderContentDirective } from './aps-loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ApsLoaderContentDirective, ApsLoaderComponent],
  exports: [ApsLoaderContentDirective, ApsLoaderComponent]
})
export class ApsLoaderModule { }
