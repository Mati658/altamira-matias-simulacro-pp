import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component';
import { DatabaseService } from '../services/database.service';
import { Actor } from '../classes/actor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alto-actor',
  standalone: true,
  imports: [ReactiveFormsModule, TablaPaisesComponent],
  templateUrl: './alto-actor.component.html',
  styleUrl: './alto-actor.component.css'
})
export class AltoActorComponent {
  database = inject(DatabaseService);
  fb = inject(FormBuilder);
  formGroup : FormGroup;
  invalido : boolean = false;


  constructor(){
    this.formGroup = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
      apellido : ["",[Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
      dni : ["",[Validators.required, Validators.minLength(6),Validators.maxLength(12), Validators.pattern('[0-9]*')]],
      edad : ["",[Validators.required, Validators.minLength(1),Validators.maxLength(2), Validators.pattern('[0-9]*')]],
      pais : ["",[Validators.required]]
    });
  }

  obtenerPais(pais:string){
    if (pais!="") {
      if (pais != "0")
        this.formGroup.controls['pais'].setValue(pais);
    }
  }

  altaActor(){
    if (this.formGroup.invalid) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Llene TODOS los campos!!!"
      });
      return 
    }
    const actor = new Actor(this.formGroup.controls['nombre'].value, this.formGroup.controls['apellido'].value, this.formGroup.controls['dni'].value, this.formGroup.controls['edad'].value, this.formGroup.controls['pais'].value);
    console.log(actor);
    this.database.agregarActor(actor);
    this.formGroup.controls['nombre'].setValue("");
    this.formGroup.controls['apellido'].setValue("");
    this.formGroup.controls['dni'].setValue("");
    this.formGroup.controls['edad'].setValue("");
    this.formGroup.controls['pais'].setValue("");
  }
}
