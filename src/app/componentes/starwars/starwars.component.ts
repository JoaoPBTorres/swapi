import { Component, ElementRef, HostListener } from '@angular/core';
import { ApiService } from '../../servicos/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Filme, Personagem, Planeta } from '../../models/interfaces';
import { PERSONAGEM } from '../../models/const';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { PersonagensComponent } from '../personagens/personagens.component';
import { PlanetasComponent } from '../planetas/planetas.component';
import { FilmesComponent } from '../filmes/filmes.component';

@Component({
  selector: 'app-starwars',
  imports: [HttpClientModule, CommonModule, NavBarComponent, PersonagensComponent, PlanetasComponent, FilmesComponent],
  providers: [ApiService],
  templateUrl: './starwars.component.html',
  styleUrl: './starwars.component.scss'
})
export class StarwarsComponent {
  secaoAtiva: string = '';
  mostrarDropdown: boolean = false;
  personagens: Personagem[] = [];
  personagensFiltrados: Personagem[] = [];
  personagemSelecionado: Personagem = PERSONAGEM;
  abrirDetalhesPersonagem: boolean = false;
  filmesDoPersonagem: Filme[] = [];
  filmes: Filme[] = [];
  planetas: Planeta[] = [];
  planetasOrdenados: Planeta[] = [];

  constructor(private apiservice: ApiService, private http: HttpClient, private elRef: ElementRef) { }

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

  selecionarPersonagem(personagem: Personagem): void {
    this.abrirDetalhesPersonagem = true;

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
    this.abrirDetalhesPersonagem = false;
    this.personagemSelecionado = PERSONAGEM;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const detalhesElement = this.elRef.nativeElement.querySelector('.detalhes');
    if (detalhesElement && !detalhesElement.contains(event.target)) {
      this.fecharDetalhes();
    }
  }
}
