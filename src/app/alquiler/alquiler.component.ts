import { Component } from '@angular/core';
import {DataServices} from "../data.services";
import {Alquiler} from "../classAlquiler.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent {

  //idTerreno:number;
  idParcela:number;
  //nParcela:number;
  DNI:String;

  fechaInicio:String;
  periodo:String;
  importe:number;

  idAlquiler:String; //idParcela + _ + "DNI" + _ + "fechaInicio" (ddmmaaaa)

  constructor(private dataService:DataServices, private router:Router) {
  }

  async registrarAlquiler(){

    if(this.idParcela != 0 && this.DNI != "" && this.fechaInicio != "" && this.periodo != "" && this.importe){
      this.idAlquiler = this.idParcela + "_" + this.DNI +  "_" + this.fechaInicio;
      let alquiler = new Alquiler(this.idAlquiler, this.idParcela, this.DNI, this.fechaInicio, this.periodo, this.importe);

      await this.dataService.guardarAlquiler(alquiler, this.idAlquiler);
      this.router.navigate(["/"]);
    } else{
      console.log("No has rellenado todos los datos del alquiler o los datos son incorrectos")
    }



  }

}
