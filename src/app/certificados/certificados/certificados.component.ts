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
      titulo: "Administrador/Analista Salesforce",
      instituicao: "Udemy",
      descricao:"Texto",
      link: "linux_conceitos_basicos.pdf"
    },
      {
      titulo: "Linux - Conceitos e Principais comandos",
      instituicao: "Udemy",
      link: "salesforce_adm_analista.pdf"
    },
    {
      titulo: "Programação BackEnd com JavaScript",
      instituicao: "Softex Pernambuco",
      link: "FAP_Carina.pdf"
    },
    {
      titulo: "Angular Angular 19 - Curso completo do Iniciante ao Avançado",
      instituicao: "Udemy",
      link: "angular_19.pdf"
    },
    {
      titulo: "Curso de Angular 2 (v17+) TypeScript do básico ao avançado",
      instituicao: "Udemy",
      link: "angular_17.pdf"
    },
    {
      titulo: "Curso de JavaScript e TypeScript do básico ao avançado",
      instituicao: "Udemy",
      link: "js_ts.pdf"
    },
    {
      titulo: "Python Essentials 1",
      instituicao: "Cisco",
      link: "python_cisco.pdf"
    },
     {
      titulo: " Introdução a Cyber Segurança ",
      instituicao: "Cisco",
      link: "Introduction_to_Cybersecurity_Badge20231109-29-y09w9p.pdf"
    }


  ]

}

