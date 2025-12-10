import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TamplateRoutingModule } from './tamplate-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { CertificadosModule } from '../certificados/certificados.module';
import { SobreModule } from '../sobre/sobre.module';
import { ProjetosModule } from '../projetos/projetos.module';
import { ContatoModule } from '../contato/contato.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    TamplateRoutingModule,
    CertificadosModule,
    SobreModule,
    ProjetosModule,
    ContatoModule,
    HeaderModule

  ]
})
export class TamplateModule { }
