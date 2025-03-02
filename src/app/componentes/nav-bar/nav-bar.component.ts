import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  standalone: true
})
export class NavBarComponent {

  @Input() public mostrarDropdown = false;

  @Output() public onFiltrarPersonagem: EventEmitter<string> = new EventEmitter()
  @Output() public onSelecionarSecao: EventEmitter<string> = new EventEmitter()
}
