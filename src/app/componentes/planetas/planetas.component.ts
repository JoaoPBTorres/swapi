import { NgFor } from '@angular/common';
import { Planeta } from './../../models/interfaces';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-planetas',
  imports: [NgFor],
  templateUrl: './planetas.component.html',
  styleUrl: './planetas.component.scss'
})
export class PlanetasComponent {
  @Input() public planetasOrdenados!: Planeta [];
}
