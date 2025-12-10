import { Component } from '@angular/core';

@Component({
  selector: 'app-certificados',
  standalone: false,
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.scss'
})
export class CertificadosComponent {

  certificados = [
    {
      titulo: "Programação BackEnd com JavaScript",
      instituicao: "Softex Pernambuco",
      horas: "144",
      link: "FAP_Carina.pdf"
    },
    {
      titulo: "Angular Angular 19 - Curso completo do Iniciante ao Avançado",
      instituicao: "Udemy",
      horas: "15",
      link: "angular_19.pdf"
    },
    {
      titulo: "Curso de Angular 2 (v17+) TypeScript do básico ao avançado",
      instituicao: "Udemy",
      horas: "45",
      link: "angular_17.pdf"
    },
    {
      titulo: "Curso de JavaScript e TypeScript do básico ao avançado",
      instituicao: "Udemy",
      horas: "146",
      link: "js_ts.pdf"
    },
    {
      titulo: "Python Essentials 1",
      instituicao: "Cisco",
      horas: "-",
      link: "python_cisco.pdf"
    }

  ]

}

