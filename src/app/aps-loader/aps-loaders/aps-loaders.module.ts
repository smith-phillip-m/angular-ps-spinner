import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApsCogComponent } from './aps-cog/aps-cog.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ApsCogComponent],
  exports: [ApsCogComponent]
})
export class ApsLoadersModule { }
