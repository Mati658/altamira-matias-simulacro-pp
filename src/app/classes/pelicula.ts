export class Pelicula {
    id : number;
    nombre : string;
    tipo : string;
    fechaEstreno : string;
    cantPublico : number;
    foto : string;
    protagonista : string;

    constructor(id:number, nombre:string, tipo:string, fechaFormateada:string, cantPublico:number, foto:string, protagonista:string){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaFormateada;
        this.cantPublico = cantPublico;
        this.foto = foto;
        this.protagonista = protagonista;
    }
}
