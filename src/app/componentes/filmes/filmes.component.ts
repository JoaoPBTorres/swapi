import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { Filme } from '../../models/interfaces';

@Component({
  selector: 'app-filmes',
  imports: [NgFor],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.scss'
})
export class FilmesComponent {
  @Input() public filmes!: Filme[];

  @Output() public onOrdenarFilmesPorLancamento: EventEmitter<Filme> = new EventEmitter();
  @Output() public onOrdenarFilmesPorCronologia: EventEmitter<Filme> = new EventEmitter();
}
