import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: false,
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  contatos = [
    {
      nome: "WhatsApp",
      descricao: "Mande uma mensagem para mim direto no WhatsApp.",
      link: "https://wa.me/5581999399920",
      textoButton:"Enviar mensagem"
    },
    {
      nome: "Email",
      descricao: "Me envie um email.",
      link: "mailto:carina.fernandes@outlook.com",
      textoButton:"Enviar email"
    },
    {
      nome: "Linkedin",
      descricao: "Veja meu perfil no Linkedin",
      link: "https://www.linkedin.com/in/carina-fernands/",
      textoButton:"Acessar Linkedin"
    }
  ]
}
