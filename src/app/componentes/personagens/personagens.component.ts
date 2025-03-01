import { ApiService } from './../../servicos/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personagens',
  imports: [],
  templateUrl: './personagens.component.html',
  styleUrl: './personagens.component.scss'
})
export class PersonagensComponent {
  pessoa: any[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getPessoa().subscribe((data: any) => {
      this.pessoa = data.results;
    });
  }
}
