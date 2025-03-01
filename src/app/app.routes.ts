import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PersonagensComponent } from './componentes/personagens/personagens.component';
import { FilmesComponent } from './componentes/filmes/filmes.component';
import { PlanetasComponent } from './componentes/planetas/planetas.component';

export const routes: Routes = [
    {
        path: '',
        component:HomeComponent
    },

    
    { path: 'personagens', component: PersonagensComponent },
    { path: 'filmes', component: FilmesComponent },
    { path: 'planetas', component: PlanetasComponent}

];
