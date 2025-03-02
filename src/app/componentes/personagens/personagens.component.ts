import { Filme } from './../../models/interfaces';
import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personagem } from '../../models/interfaces';

@Component({
  selector: 'app-personagens',
  imports: [NgIf, NgFor],
  templateUrl: './personagens.component.html',
  styleUrl: './personagens.component.scss'
})
export class PersonagensComponent {

  @Input() public personagensFiltrados!: Personagem[];

  @Input() public abrirDetalhesPersonagem: boolean = false;

  @Input() public personagemSelecionado!: Personagem;

  @Input() public filmesDoPersonagem!: Filme[];

  @Output() public onSelecionarPersonagem: EventEmitter<Personagem> = new EventEmitter();

}
