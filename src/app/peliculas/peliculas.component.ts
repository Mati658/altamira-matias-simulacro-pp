import { Component } from '@angular/core';
import { TablaPeliculasComponent } from '../tabla-peliculas/tabla-peliculas.component';
import { DetallePeliculasComponent } from '../detalle-peliculas/detalle-peliculas.component';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [TablaPeliculasComponent, DetallePeliculasComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {

}
