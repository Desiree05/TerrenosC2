import { Component } from '@angular/core';
import {Terreno} from "../classTerreno.model";
import {DataServices} from "../data.services";
import {Parcela} from "../classParcela.model";

@Component({
  selector: 'app-parcela-ver',
  templateUrl: './parcela-ver.component.html',
  styleUrls: ['./parcela-ver.component.css']
})
export class ParcelaVerComponent {

  id:number;
  nParcela:number;
  parcelas:Parcela[];
  parcelaEncontrada:Parcela;
  encontrado:boolean;

  constructor(private dataService:DataServices) {

  }

  async consultarParcela() {
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
      this.parcelaEncontrada = this.parcelas[index - 1];

    } else {
      console.log("No existe parcela con ese identificador de terreno y numero de parcela");
    }

  }

}
