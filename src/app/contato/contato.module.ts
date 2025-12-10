import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato/contato.component';
import { MatCard } from "@angular/material/card";


@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    MatCard
],
  exports:[
    ContatoComponent
  ]
})
export class ContatoModule { }
