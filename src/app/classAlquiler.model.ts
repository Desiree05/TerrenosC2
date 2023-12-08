export class Alquiler {

  constructor(idAlquiler:String, idParcela:number, DNI:String, fechaInicio:String, periodo:String, importe:number) {
    this.idAlquiler = idAlquiler;
    this.idParcela = idParcela;
    this.DNI = DNI;
    this.fechaInicio = fechaInicio;
    this.periodo = periodo;
    this.importe =  importe;
  }


  idAlquiler:String = ""; //idParcela + _ + "DNI" + _ + "fechaInicio" (ddmmaaaa)
  idParcela:number = 0;
  DNI:String = "";

  fechaInicio:String = "";
  periodo:String = "";
  importe:number = 0;

}
