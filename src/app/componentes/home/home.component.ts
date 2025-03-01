
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './../../servicos/api.service';
import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [ApiService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  secaoAtiva: string = 'personagens';
  mostrarDropdown: boolean = false;
  personagens: any[] = [];
  personagensFiltrados: any[] = [];
  personagemSelecionado: any = null;
  filmesDoPersonagem: string[] = [];
  planetas: any[] = [];
  planetasOrdenados: any[] = [];
  filmes: any[] = [];

  constructor(private apiservice: ApiService, private http: HttpClient, private elRef: ElementRef) {}

  ngOnInit() {
    this.carregarPersonagens();
    this.carregarPlanetas();
    this.carregarFilmes();
  }

  carregarPersonagens(): void {
    this.apiservice.getPersonagens().subscribe(data => {
      this.personagens = data.results;
      this.personagensFiltrados = this.personagens; 
    });
  }

  filtrarPersonagens(genero: string): void {
    if (genero === 'todos') {
      this.personagensFiltrados = this.personagens;
    } else {
      this.personagensFiltrados = this.personagens.filter(p => p.gender === genero);
    }
    this.mostrarDropdown = false; 
  }

  selecionarPersonagem(personagem: any): void {
    this.personagemSelecionado = personagem;
    this.filmesDoPersonagem = [];
    personagem.films.forEach((url: string) => {
      this.http.get(url).subscribe((filme: any) => {
        this.filmesDoPersonagem.push(filme.title);
      });
    });
  }

  carregarPlanetas(): void {
    this.apiservice.getPlanetas().subscribe(data => {
      this.planetas = data.results;
      this.planetasOrdenados = this.planetas.sort((a, b) => b.residents.length - a.residents.length);
    });
  }

  carregarFilmes(): void {
    this.apiservice.getFilmes().subscribe(data => {
      this.filmes = data.results;
    });
  }

  ordenarFilmesPorLancamento(): void {
    this.filmes.sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
  }

  ordenarFilmesPorCronologia(): void {
    this.filmes.sort((a, b) => a.episode_id - b.episode_id);
  }

  selecionarSecao(secao: string): void {
    this.secaoAtiva = secao;
  }

  fecharDetalhes(): void {
    this.personagemSelecionado = null;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const detalhesElement = this.elRef.nativeElement.querySelector('.detalhes');
    if (detalhesElement && !detalhesElement.contains(event.target)) {
      this.fecharDetalhes();
    }
  }
}