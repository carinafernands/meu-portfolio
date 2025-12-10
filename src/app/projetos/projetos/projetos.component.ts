import { Component } from '@angular/core';

@Component({
  selector: 'app-projetos',
  standalone: false,
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {

  projetos = [
    {
      nome: "Galeria de lugares",
      descricao: "Aplicação frontend desenvolvida em Angular, responsável pela interface do Passeio App. O sistema permite que usuários façam login, visualizem a galeria, gerenciem categorias e lugares, e interajam com o conteúdo do app.",
      imagem: "assets/img/galeria.png",
      tecnologias:"Angular 17+, TS, HTML/scss, Google Oauth 2.0, Node.js/JSON server, HTTPClient",
      link:"https://vercel.com/carinafernands-projects/passeio-app-frontend-qi1t",
      github:"https://github.com/carinafernands/passeio-app-frontend"
    },
    {
      nome: "Lista de compras",
      descricao: "Uma aplicação simples de lista de compras construída com Angular — serve como exemplo/prática para gerenciar itens de compra de forma dinâmica no navegador.",
      imagem: "assets/img/lugar.png",
      tecnologias:"Angular, TypeScript, HTML/SCSS",
      link:"https://carinafernands.github.io/lista-compras-angular/",
      github:"https://github.com/carinafernands/lista-compras-angular"
    },
    {
      nome: "Marmitas FIT",
      descricao: "Uma landing page simples construída com HTML, CSS e JavaScript — ideal para servir de base de site, portfólio ou página de apresentação.",
      imagem: "assets/img/marmita.png",
      tecnologias:"HTML, CSS, JavaScript",
      link:"https://carinafernands.github.io/landing-page/",
      github:"https://github.com/carinafernands/pokedex"
    },
    {
      nome: "POKEDEX",
      descricao: "Uma aplicação web para listar e visualizar informações de Pokémons usando a PokéAPI — ideal como projeto de estudo de JS/HTML/CSS ou como base para algo mais completo.",
      imagem: "assets/img/pokedex.png",
      tecnologias:"HTML, CSS, JavaScript",
      link:"https://carinafernands.github.io/pokedex/",
      github:"https://github.com/carinafernands/pokedex"
    }
  ]
}
