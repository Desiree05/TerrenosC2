import { Component } from '@angular/core';
import {DataServices} from "../data.services";
import {Terreno} from "../classTerreno.model";

@Component({
  selector: 'app-terreno-ver',
  templateUrl: './terreno-ver.component.html',
  styleUrls: ['./terreno-ver.component.css']
})
export class TerrenoVerComponent {

  id:number;
  terrenos:Terreno[];
  terrenoEncontrado:Terreno;
  encontrado:boolean;

  constructor(private dataService:DataServices) {

  }

  async consultarTerreno(id: number){
    //this.id == id
    this.encontrado = false;

    (await this.dataService.cargarTerrenos()).subscribe(
      terrenos => {
        this.terrenos = Object.values(terrenos);
      });

    let index:number;
    for(index = 0; index < this.terrenos.length && !this.encontrado; index++){
      if(this.terrenos[index].id == this.id){
        this.encontrado = true;
      }
    }

    if(this.encontrado){
      this.terrenoEncontrado = this.terrenos[index-1];
    } else{
      console.log("No existe terreno con ese identificador");
    }

  }

}
