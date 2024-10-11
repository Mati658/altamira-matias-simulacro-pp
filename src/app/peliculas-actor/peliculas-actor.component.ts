import { Component, inject, Input } from '@angular/core';
import { Actor } from '../classes/actor';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-peliculas-actor',
  standalone: true,
  imports: [],
  templateUrl: './peliculas-actor.component.html',
  styleUrl: './peliculas-actor.component.css'
})
export class PeliculasActorComponent {
  database = inject(DatabaseService);
  pais : any;

  @Input() set obtenerActor(actor : Actor){
    if (actor) {
      this.infoPais(actor);
    }
  }

  infoPais(actor : Actor){
    const nombre = `${actor.nombre} ${actor.apellido}`;
    let lista = "";
    this.database.traerPeliculas().subscribe((pelis:any)=>{
      pelis.forEach((peli:any) => {
        if (peli.protagonista == nombre) {
          lista +=`<li>${peli.nombre}</li>`;
        } 
      });
      (<HTMLDivElement>document.getElementById("lista")).innerHTML = lista;
    })
  }
}
