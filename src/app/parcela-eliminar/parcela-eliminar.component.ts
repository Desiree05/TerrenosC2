import { Component } from '@angular/core';
import {Terreno} from "../classTerreno.model";
import {DataServices} from "../data.services";
import {Parcela} from "../classParcela.model";

@Component({
  selector: 'app-parcela-eliminar',
  templateUrl: './parcela-eliminar.component.html',
  styleUrls: ['./parcela-eliminar.component.css']
})
export class ParcelaEliminarComponent {

  id:number;
  nParcela:number;
  parcelas:Parcela[];
  parcelaEliminada:Parcela;
  encontrado:boolean;
  constructor(private dataService:DataServices) {
  }


  async consultarParcela(id: number){
    //this.id == id
    this.encontrado = false;

    (await this.dataService.cargarParcelas()).subscribe(
      parcelas => {
        this.parcelas = Object.values(parcelas);
      });

    let idParcela:number = (this.id*1000) + (this.nParcela+900);

    let index: number;
    for (index = 0; index < this.parcelas.length && !this.encontrado; index++) {
      if (this.parcelas[index].id== idParcela) {
        this.encontrado = true;
      }
    }

    if (this.encontrado) {
      this.parcelaEliminada = this.parcelas[index - 1];
      console.log(this.parcelaEliminada.id);
      await this.dataService.eliminarParcelas(this.parcelaEliminada.id);

    } else {
      console.log("No existe parcela con ese identificador de terreno y numero de parcela");
    }

  }

}
