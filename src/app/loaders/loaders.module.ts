import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadersComponent } from './loaders.component';
import { CogComponent } from './cog/cog.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadersComponent, CogComponent],
  exports: [CogComponent]
})
export class LoadersModule { }
