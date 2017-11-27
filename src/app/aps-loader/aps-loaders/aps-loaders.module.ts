import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApsLoadersComponent } from './aps-loaders.component';

import { ApsCogComponent } from './aps-cog/aps-cog.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ApsLoadersComponent, ApsCogComponent],
  exports: [ApsLoadersComponent]
})
export class ApsLoadersModule { }
