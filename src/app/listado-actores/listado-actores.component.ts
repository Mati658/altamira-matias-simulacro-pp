import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Actor } from '../classes/actor';

@Component({
  selector: 'app-listado-actores',
  standalone: true,
  imports: [],
  templateUrl: './listado-actores.component.html',
  styleUrl: './listado-actores.component.css'
})
export class ListadoActoresComponent {
  @Input() actores:Actor[] = [];
  @Output() detallePelicula : EventEmitter<Actor> = new EventEmitter<Actor>;

  seleccionarActor(index : number){
    console.log(this.actores[index])
    this.detallePelicula.emit(this.actores[index]);
  }
}
