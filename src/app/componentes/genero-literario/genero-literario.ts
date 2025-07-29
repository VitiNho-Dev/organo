import { Component } from '@angular/core';
import { LivroComponent } from '../livro/livro';
import { livros } from '../../data/mock-livros';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroComponent],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css'
})
export class GeneroLiterario {
  livro = livros[0]
}
