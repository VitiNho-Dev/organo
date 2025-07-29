import { Component, input } from '@angular/core';
import { Livro } from './livro_interface';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css'
})
export class LivroComponent {

  livro = input.required<Livro>();

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito
  }
}
