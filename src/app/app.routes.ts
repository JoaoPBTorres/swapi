import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { StarwarsComponent } from './componentes/starwars/starwars.component';

export const routes: Routes = [
    { path: '',component:HomeComponent },
    { path: 'starwars', component: StarwarsComponent },
];
