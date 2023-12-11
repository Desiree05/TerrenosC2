import {Component, OnInit} from '@angular/core';
import {getLocaleTimeFormat} from "@angular/common";
import {Terreno} from "../classTerreno.model";
import {DataServices} from "../data.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-terreno-crear',
  templateUrl: './terreno-crear.component.html',
  styleUrls: ['./terreno-crear.component.css']
})
export class TerrenoCrearComponent{

  esFinca:boolean = false;
  esLatifundio:boolean = false;
  imprimirID:boolean = false;

  id:number=0;
  latitud:number;
  longitud:number;
  tamano:number;
  limites:String = "";
  tipo:String = "";

  terrenos:Terreno[];

  constructor(private dataService:DataServices, private router:Router) {
  }




  async registrarTerreno() {

    this.imprimirID = false;

     (await this.dataService.cargarTerrenos()).subscribe(
      terrenos => {
        this.terrenos = Object.values(terrenos);
      });


    if(this.esFinca){
      this.tipo = "finca"; //las fincas empiezan por 1
      this.id = 10000 + this.terrenos.length + 1;
    }

    if(this.esLatifundio){
      this.tipo = "latifundio"; //los latifundios empiezan por 2
      this.id = 20000 + this.terrenos.length + 1;
    }

    if(this.latitud != 0 && this.longitud != 0 && this.tamano > 0 && this.limites != ""  && this.tipo != ""){
      //usar Forms: mirar que los datos sean correctos (>0, al menos 5 decimales coordenadas, que no sean null)

      let terreno = new Terreno(this.id, this.latitud, this.longitud, this.tamano, this.limites, this.tipo);
      await this.dataService.guardarTerrenos(terreno, this.id);

      console.log("Terreno con id: " + terreno.id + " creado con éxito");
      //this.router.navigate(["/terrenos"]);

      this.imprimirID = true;

    } else{
      console.log("No has rellenado todos los datos del terreno")
    }

    this.esFinca = false;
    this.esLatifundio = false;

  }



}
