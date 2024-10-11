import { Component, inject, Input } from '@angular/core';
import { Actor } from '../classes/actor';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-detalle-pais',
  standalone: true,
  imports: [],
  templateUrl: './detalle-pais.component.html',
  styleUrl: './detalle-pais.component.css'
})
export class DetallePaisComponent {
  api = inject(ApiRequestService);
  pais : any;

  @Input() set obtenerActor(actor : Actor){
    if (actor) {
      this.infoPais(actor.pais);
    }
  }

  infoPais(pais : string){
    this.api.obtenerDetallePais(pais).subscribe((info:any)=>{
      console.log(info[0])
      this.pais = (info[0]);
    })
  }
}
