import { Component, EventEmitter, inject, Output } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tabla-actores',
  standalone: true,
  imports: [],
  templateUrl: './tabla-actores.component.html',
  styleUrl: './tabla-actores.component.css'
})
export class TablaActoresComponent {
  database = inject(DatabaseService);
  tabla : string = "";
  @Output() actor : EventEmitter<string> = new EventEmitter<string>;

  constructor(){
    this.obtenerActores();
  }

  obtenerActores(){
    this.database.traerActores().subscribe((actores:any)=>{
      actores.forEach((actor:any) => {
        this.tabla += '<option value="'+actor.nombre+" "+actor.apellido+'">'+actor.nombre+" "+actor.apellido+'</option>';
      });
      (<HTMLSelectElement>document.getElementById("actores")).innerHTML += this.tabla;
    });
  }

  recibirActor(event : Event){
    const selectElement = event.target as HTMLSelectElement;
    this.actor.emit(selectElement.value);
  }
}
