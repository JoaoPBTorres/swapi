import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './../../servicos/api.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  providers: [ApiService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pessoa: any[] = [];

  constructor(private apiservice: ApiService){}

  ngOnInit(){
    this.apiservice.getPessoa().subscribe((data) => {
      this.pessoa = data.results;
      console.log('Pessoas',this.pessoa);
    }

    )
  }

}
