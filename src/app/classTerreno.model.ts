export class Terreno {

  constructor(id:number, latitud:number, longitud:number, tamano:number, limites:String, tipo:String) {
    this.id = id;
    this.latitud = latitud;
    this.longitud = longitud;
    this.tamano = tamano;
    this.limites = limites;
    this.tipo = tipo;
  }

  id:number = 0;
  latitud:number = 0;
  longitud:number = 0;
  tamano:number = 0;
  limites:String = "";
  tipo:String = "";

}
