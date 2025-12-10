import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatCardModule } from '@angular/material/card';

import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetosComponent } from './projetos/projetos.component';


@NgModule({
  declarations: [
    ProjetosComponent
  ],
  imports: [
    CommonModule,
    ProjetosRoutingModule,
    MatCardModule
  ],
  exports:[
    ProjetosComponent
  ]
})
export class ProjetosModule { }
