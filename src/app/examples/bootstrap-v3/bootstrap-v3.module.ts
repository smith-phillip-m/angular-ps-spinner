import { ApsLoaderModule } from './../../aps-loader/aps-loader.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapV3Component } from './bootstrap-v3.component';
import { TableComponent } from './table/table.component';
import { ButtonTypesComponent } from './button-types/button-types.component';
import { ButtonSizesComponent } from './button-sizes/button-sizes.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [CommonModule, ApsLoaderModule],
  declarations: [BootstrapV3Component,
    TableComponent,
    ButtonTypesComponent,
    ButtonSizesComponent,
    GridComponent
  ],
  exports: [BootstrapV3Component]
})
export class BootstrapV3Module { }
