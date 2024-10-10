import { Component, Input } from '@angular/core';
import { Pelicula } from '../classes/pelicula';

@Component({
  selector: 'app-detalle-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './detalle-peliculas.component.html',
  styleUrl: './detalle-peliculas.component.css'
})
export class DetallePeliculasComponent {
  @Input() set obtenerDetallePelicula(pelicula : Pelicula){
    if (pelicula) {
      this.actualizarDetalle(pelicula);
    }
  }

  actualizarDetalle(pelicula:Pelicula){
    console.log(pelicula);
    let tabla : string = ""
    tabla += `
    <tr>
    <td>${pelicula.id}</td>   
    <td><img src="${pelicula.foto}" width="100" height="100"></td>
    <td>${pelicula.nombre}</td>
    <td>${pelicula.tipo}</td>
    <td>${pelicula.fechaEstreno}</td>
    <td>${pelicula.cantPublico}</td>
    <td>${pelicula.protagonista}</td>
    </tr>
    `;
    (<HTMLElement>document.getElementById("table_pelicula")).innerHTML = tabla;
  }
}
