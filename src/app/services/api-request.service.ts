import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
 
  http = inject(HttpClient);
  api_url = "";

  constructor() { }


  // obtenerTrivia(categoria: string) {
  //   const key = "$2b$12$a/xcS8ELNl.M3vK0rGY6HOi./Q43hKC99iLB43XO87Ql7accLPteW";
  //   const url = `https://api.quiz-contest.xyz/questions?limit=10&page=1&category=${categoria}&format=multiple`;
  //   const peticion = this.http.get(url, {
  //     responseType: 'json',
  //     headers:{
  //       Authorization: key
  //     }
  //   })

  //   return peticion;
  // }

}
