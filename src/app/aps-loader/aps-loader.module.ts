import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApsLoaderComponent, ApsLoaderContentDirective } from './aps-loader.component';
import { ApsLoadersModule } from './aps-loaders/aps-loaders.module';

@NgModule({
  imports: [CommonModule, ApsLoadersModule],
  declarations: [ApsLoaderContentDirective, ApsLoaderComponent],
  exports: [ApsLoaderContentDirective, ApsLoaderComponent]
})
export class ApsLoaderModule { }
