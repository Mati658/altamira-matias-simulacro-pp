import { inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from '../classes/pelicula';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private firestore = inject(AngularFirestore);
  constructor() { }

  agregarPelicula(pelicula : Pelicula){
    const colPeliculas = this.firestore.collection("peliculas"); //referencia a la coleccion de BD
    colPeliculas.add({...pelicula});
  }

  traerPeliculas(): Observable<Pelicula[]> {
    const colPeliculas = this.firestore.collection("peliculas");
    return colPeliculas.valueChanges() as Observable<Pelicula[]>;
  }
}
