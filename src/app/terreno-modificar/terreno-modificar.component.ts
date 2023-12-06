import { Component } from '@angular/core';
import {Terreno} from "../classTerreno.model";
import {DataServices} from "../data.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-terreno-modificar',
  templateUrl: './terreno-modificar.component.html',
  styleUrls: ['./terreno-modificar.component.css']
})
export class TerrenoModificarComponent {

  id:number;
  terrenos:Terreno[];
  terrenoAModificar:Terreno;
  encontrado:boolean;

  latitud:number = 0;
  longitud:number = 0;
  tamano:number = 0;
  limites:String = "";
  tipo:String = "";
  //esFinca:boolean = false;
  //esLatifundio:boolean = false;


  constructor(private dataService:DataServices, private router:Router) {

  }

  async visuarlizarTerreno(id:number){

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

    if(this.encontrado) {
      this.terrenoAModificar = this.terrenos[index - 1];

      //guardar valores
      this.latitud = this.terrenoAModificar.latitud;
      this.longitud = this.terrenoAModificar.longitud;
      this.tamano = this.terrenoAModificar.tamano;
      this.limites = this.terrenoAModificar.limites;
      this.tipo = this.terrenoAModificar.tipo;

    } else{
      console.log("No existe terreno con ese identificador");
    }

  }

  async guardarModificacionesTerreno(id: number){
    //this.id == id

      if(this.latitud != 0 && this.longitud != 0 && this.tamano > 0 && this.limites != ""  && this.tipo != ""){
        //usar Forms: mirar que los datos sean correctos (>0, al menos 5 decimales coordenadas, que no sean null)

        let terreno = new Terreno(this.id, this.latitud, this.longitud, this.tamano, this.limites, this.tipo);
        await this.dataService.guardarTerrenos(terreno, this.id);

        //this.router.navigate(["/terrenos"]);
        console.log("Terreno " + this.id + " modificado");

      } else{
        console.log("Datos no correctos");
      }

      /*if(this.terrenoAModificar.tipo == "finca"){
        this.esFinca = true;
      } else{
        this.esLatifundio = true;
      }
      console.log(this.terrenoAModificar.id);
*/


  }

}
