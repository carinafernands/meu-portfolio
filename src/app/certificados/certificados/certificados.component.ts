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
      descricao:"Gestão de relacionamento com o cliente (CRM) · Administração de Salesforce · Desenvolvimento de Salesforce.",
      link: "salesforce_adm_analista.pdf"
    },
     {
      titulo: "Training Force 2026 - Salesforce",
      instituicao: "Sotelli",
      descricao:"Administração de Salesforce · Desenvolvimento de Salesforce.",
      link: "training_force.pdf"
    },
      {
      titulo: "Linux - Conceitos e Principais comandos",
      instituicao: "Udemy",
      descricao:"Linux · Linux Terminal · Bash/Shell · Administração de Sistemas Linux · Gerenciamento de Processos.",
      link: "linux_conceitos_basicos.pdf"
    },
    {
      titulo: "Programação BackEnd com JavaScript",
      instituicao: "Softex Pernambuco",
      descricao:"JavaScript · TypeScript · MySQL.",
      link: "FAP_Carina.pdf"
    },
    {
      titulo: "Angular Angular 19 - Curso completo do Iniciante ao Avançado",
      instituicao: "Udemy",
      descricao:"Angular Material · Tailwind CSS · API REST · Login Social · Desenvolvimento de API",
      link: "angular_19.pdf"
    },
    {
      titulo: "Curso de Angular 2 (v17+) TypeScript do básico ao avançado",
      instituicao: "Udemy",
      descricao:"Angular (Framework) · Angular Material · TypeScript · HTML · SASS",
      link: "angular_17.pdf"
    },
    {
      titulo: "Curso de JavaScript e TypeScript do básico ao avançado",
      instituicao: "Udemy",
      descricao:"JavaScript · TypeScript · React.js · Next.js · MySQL · API REST · HTML5 · CSS",
      link: "js_ts.pdf"
    },
    {
      titulo: "Python Essentials 1",
      instituicao: "Cisco",
      descricao:"Lógica de Programação · Estruturas Condicionais · Estruturas de Repetição · Variáveis e Tipos de Dados · Funções em Python",
      link: "python_cisco.pdf"
    },
     {
      titulo: " Introdução a Cyber Segurança ",
      instituicao: "Cisco",
      descricao:"Segurança da Informação · Cybersecurity Fundamentals · Ameaças Cibernéticas · Malware · Phishing · Boas Práticas de Segurança Digital · Proteção de Dados · Conceitos de Confidencialidade, Integridade e Disponibilidade",
      link: "Introduction_to_Cybersecurity_Badge20231109-29-y09w9p.pdf"
    }


  ]

}

