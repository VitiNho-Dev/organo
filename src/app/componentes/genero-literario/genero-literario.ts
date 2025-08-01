import { Component, input } from '@angular/core';
import { LivroComponent } from '../livro/livro';
import { livros } from '../../data/mock-livros';
import { GeneroLiterario } from '../livro/livro_interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genero-literario',
  imports: [
    LivroComponent,
    CommonModule,
  ],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css'
})
export class GeneroLiterarioComponent {
  genero = input.required<GeneroLiterario>();
}
