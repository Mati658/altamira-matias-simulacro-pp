import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from '../classes/pelicula';

@Component({
  selector: 'app-tabla-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './tabla-peliculas.component.html',
  styleUrl: './tabla-peliculas.component.css'
})
export class TablaPeliculasComponent {
  @Input() peliculas:Pelicula[] = [];
  @Output() detallePelicula : EventEmitter<Pelicula> = new EventEmitter<Pelicula>;

  seleccionarPelicula(index : number){
    console.log(this.peliculas[index])
    this.detallePelicula.emit(this.peliculas[index]);
  }
}
