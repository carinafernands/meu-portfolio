import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificadosRoutingModule } from './certificados-routing.module';
import { CertificadosComponent } from './certificados/certificados.component';

import {  MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    CertificadosComponent
  ],
  imports: [
    CommonModule,
    CertificadosRoutingModule,
    MatExpansionModule

],
  exports: [
    CertificadosComponent
  ]
})
export class CertificadosModule { }
