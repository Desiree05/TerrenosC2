import { Component } from '@angular/core';
import {Terreno} from "../classTerreno.model";
import {DataServices} from "../data.services";
import {Router} from "@angular/router";
import {Parcela} from "../classParcela.model";

@Component({
  selector: 'app-parcela-crear',
  templateUrl: './parcela-crear.component.html',
  styleUrls: ['./parcela-crear.component.css']
})
export class ParcelaCrearComponent {
  id:number = 0;
  idTerreno:number; //del terreno al que pertenece la parcela
  nParcela:number;
  latitud:number;
  longitud:number;
  tamano:number;
  limites:String = "";
  disponibilidad:boolean = false;



  constructor(private dataService:DataServices, private router:Router) {
  }




  async registrarParcela() {

    //si es latifundio podemos crear la parcela
    if(this.idTerreno / 10000 >= 2){
      this.id = (this.idTerreno*1000) + (this.nParcela+900);

      if(this.nParcela % 100 == this.nParcela && this.latitud != 0 && this.longitud != 0 && this.tamano > 0 && this.limites != ""){
        //usar Forms: mirar que los datos sean correctos (>0, al menos 5 decimales coordenadas, que no sean null)

        let parcela = new Parcela(this.id, this.idTerreno, this.nParcela, this.latitud, this.longitud, this.tamano, this.limites, this.disponibilidad);
        await this.dataService.guardarParcelas(parcela, this.id);

        this.router.navigate(["/parcelas"]);
      } else{
        console.log("No has rellenado todos los datos de la parcela")
      }

      this.disponibilidad = false;

    } else{
      console.log("El terreno no es un latifundio, por lo que no se puede crear la parcela");
    }

  }


}
