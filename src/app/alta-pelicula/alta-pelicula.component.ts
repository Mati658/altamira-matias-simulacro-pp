import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
import Swal from 'sweetalert2';
import { Pelicula } from '../classes/pelicula';
import { TablaActoresComponent } from '../tabla-actores/tabla-actores.component';

@Component({
  selector: 'app-alta-pelicula',
  standalone: true,
  imports: [ReactiveFormsModule, TablaActoresComponent],
  templateUrl: './alta-pelicula.component.html',
  styleUrl: './alta-pelicula.component.css'
})
export class AltaPeliculaComponent {
  database = inject(DatabaseService);
  fb = inject(FormBuilder);
  formGroup : FormGroup;
  invalido : boolean = false;
  tipo : string = "";
  pelis : string[] = [];

  constructor(){
    this.formGroup = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
      tipo : ["",[Validators.required]],
      fechaEstreno : ["",[Validators.required]],
      cantPublico : ["",[Validators.required, Validators.minLength(1), Validators.pattern('[0-9]*')]],
      foto : ["",[Validators.required, Validators.pattern('https?://.+')]],
      protagonista : ["",[Validators.required, Validators.minLength(1), Validators.pattern('[a-zA-Z ]*')]],
    });
  }

  obtenerActor(actor:string){
    if (actor !="" ) {
      if (actor != "0")
        this.formGroup.controls['protagonista'].setValue(actor);
    }
  }

  altaPelicula(){
    if (this.formGroup.invalid) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Llene TODOS los campos!!!"
      });
      return 
    }
    this.database.traerPeliculas().subscribe((peli:any)=>{
      this.pelis = peli;
      const pelicula = new Pelicula(this.pelis.length+1 ,this.formGroup.controls['nombre'].value, this.formGroup.controls['tipo'].value, this.formGroup.controls['fechaEstreno'].value, this.formGroup.controls['cantPublico'].value, this.formGroup.controls['foto'].value, this.formGroup.controls['protagonista'].value);
      this.database.agregarPelicula(pelicula);
    })
  }

  recibirTipo(event : Event){
    const selectElement = event.target as HTMLSelectElement;
    this.tipo = selectElement.value;
  }
  
}
