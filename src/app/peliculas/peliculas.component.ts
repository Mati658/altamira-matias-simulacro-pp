import { Component, inject } from '@angular/core';
import { TablaPeliculasComponent } from '../tabla-peliculas/tabla-peliculas.component';
import { DetallePeliculasComponent } from '../detalle-peliculas/detalle-peliculas.component';
import { Pelicula } from '../classes/pelicula';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [TablaPeliculasComponent, DetallePeliculasComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  database = inject(DatabaseService);
  pelicula : Pelicula[] = [];
  detallePelicula! : Pelicula;

  constructor(){
    this.database.traerPeliculas().subscribe((peli:any)=>{
      this.pelicula = peli;
    })
  }

  recibirDetallePelicula(pelicula : Pelicula){
    this.detallePelicula = pelicula;
  }
}
