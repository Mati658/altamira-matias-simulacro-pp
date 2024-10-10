export class Pelicula {
    id : number;
    nombre : string;
    tipo : string;
    fecha : Date;
    fechaEstreno : string;
    cantPublico : number;
    foto : string;
    protagonista : string;

    constructor(id:number, nombre:string, tipo:string, fecha:Date, fechaFormateada:string, cantPublico:number, foto:string, protagonista:string){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fecha = fecha;
        this.fechaEstreno = fechaFormateada;
        this.cantPublico = cantPublico;
        this.foto = foto;
        this.protagonista = protagonista;
    }
}
