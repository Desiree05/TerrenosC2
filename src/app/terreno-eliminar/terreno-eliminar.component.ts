import { Component } from '@angular/core';
import {Terreno} from "../classTerreno.model";
import {DataServices} from "../data.services";

@Component({
  selector: 'app-terreno-eliminar',
  templateUrl: './terreno-eliminar.component.html',
  styleUrls: ['./terreno-eliminar.component.css']
})
export class TerrenoEliminarComponent {

  id:number;
  terrenos:Terreno[];
  //terrenoEliminado:Terreno;
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
      await this.dataService.eliminarTerrenos(this.id);
      console.log("eliminado con exito");
    } else{
      console.log("No existe terreno con ese identificador");
    }

  }

}
