import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreRoutingModule } from './sobre-routing.module';
import { SobreComponent } from './sobre/sobre.component';


@NgModule({
  declarations: [
    SobreComponent
  ],
  imports: [
    CommonModule,
    SobreRoutingModule
  ],
  exports: [
    SobreComponent
  ]
})
export class SobreModule { }
