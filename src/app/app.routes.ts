import { Routes } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { AltaPeliculaComponent } from './alta-pelicula/alta-pelicula.component';
import { ActoresComponent } from './actores/actores.component';
import { AltoActorComponent } from './alto-actor/alto-actor.component';

export const routes: Routes = [
    {
        path: '', component:PeliculasComponent,
    },
    {
        path: 'AltaPelicula', component:AltaPeliculaComponent,
    },
    {
        path: 'Actores', component:ActoresComponent,
    },
    {
        path: 'AltoActor', component:AltoActorComponent,
    }
];
