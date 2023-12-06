import { Component } from '@angular/core';
import {DataServices} from "../data.services";
import {Router} from "@angular/router";
import {Parcela} from "../classParcela.model";

@Component({
  selector: 'app-parcela-modificar',
  templateUrl: './parcela-modificar.component.html',
  styleUrls: ['./parcela-modificar.component.css']
})
export class ParcelaModificarComponent {

  id:number = 0;
  idTerreno:number; //del terreno al que pertenece la parcela
  nParcela:number;
  latitud:number;
  longitud:number;
  tamano:number;
  limites:String = "";
  disponibilidad:boolean = false;

  encontrado:boolean;
  parcelas:Parcela[];
  parcelaEncontrada:Parcela;


  constructor(private dataService:DataServices, private router:Router) {
  }


  async consultarParcela() {
    //this.id == id
    this.encontrado = false;

    (await this.dataService.cargarParcelas()).subscribe(
      parcelas => {
        this.parcelas = Object.values(parcelas);
      });

    this.id = (this.idTerreno*1000) + (this.nParcela+900);

    let index: number;
    for (index = 0; index < this.parcelas.length && !this.encontrado; index++) {
      if (this.parcelas[index].id == this.id) {
        this.encontrado = true;
      }
    }

    if (this.encontrado) {
      this.parcelaEncontrada = this.parcelas[index-1];

      this.id = this.parcelaEncontrada.id;
      this.latitud = this.parcelaEncontrada.latitud;
      this.longitud = this.parcelaEncontrada.longitud;
      this.tamano = this.parcelaEncontrada.tamano;
      this.limites = this.parcelaEncontrada.limites;
      this.disponibilidad = this.parcelaEncontrada.disponibilidad;
    } else {
      console.log("No existe parcela con ese identificador de terreno y numero de parcela");
    }

  }

  async modificarParcela() {

    this.id = (this.idTerreno*1000) + (this.nParcela+900);

    if(this.nParcela % 100 == this.nParcela && this.latitud != 0 && this.longitud != 0 && this.tamano > 0 && this.limites != ""){
      //usar Forms: mirar que los datos sean correctos (>0, al menos 5 decimales coordenadas, que no sean null)

      let parcela = new Parcela(this.id, this.idTerreno, this.nParcela, this.latitud, this.longitud, this.tamano, this.limites, this.disponibilidad);
      await this.dataService.guardarParcelas(parcela, this.id);

      this.router.navigate(["/parcelas"]);
    } else{
      console.log("No has rellenado todos los datos de la parcela")
    }


  }

}
