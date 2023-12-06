export class Parcela {

  constructor(id:number, idTerreno:number, nParcela:number, latitud:number, longitud:number, tamano:number, limites:String, disponibilidad:boolean) {
    this.id = id;
    this.idTerreno = idTerreno;
    this.nParcela = nParcela;
    this.latitud = latitud;
    this.longitud = longitud;
    this.tamano = tamano;
    this.limites = limites;
    this.disponibilidad = disponibilidad;
  }


  id:number = 0;
  idTerreno:number = 0; //del terreno al que pertenece la parcela
  nParcela:number = 0;
  latitud:number = 0;
  longitud:number = 0;
  tamano:number = 0;
  limites:String = "";
  disponibilidad:boolean = false;

}
