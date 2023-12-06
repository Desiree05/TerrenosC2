import { Component } from '@angular/core';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent {

  //idTerreno:number;
  idParcela:number;
  //nParcela:number;
  DNI:number;

  fechaInicio:String;
  periodo:String;
  importe:number;

  registrarAlquiler(){

  }

}
