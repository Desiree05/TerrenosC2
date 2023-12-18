import { Component } from '@angular/core';
import {Arrendatario} from "../classArrendatario.model";
import {DataServices} from "../data.services";

@Component({
  selector: 'app-arrendatario-eliminar',
  templateUrl: './arrendatario-eliminar.component.html',
  styleUrls: ['./arrendatario-eliminar.component.css']
})
export class ArrendatarioEliminarComponent {

  DNI:String;
  nombre:String;
  apellido:String;
  email:String;
  edad:number;
  arrendatarios:Arrendatario[];
  arrendatarioEncontrado:Arrendatario;
  encontrado:boolean;

  constructor(private dataService:DataServices) {

  }


  async eliminarArrendatario() {

    this.encontrado = false;

    (await this.dataService.cargarArrendatarios()).subscribe(
      arrendatarios => {
        this.arrendatarios = Object.values(arrendatarios);
      });

    let index: number;
    for (index = 0; index < this.arrendatarios.length && !this.encontrado; index++) {
      if (this.arrendatarios[index].DNI == this.DNI) {
        this.encontrado = true;
      }
    }

    if (this.encontrado) {
      await this.dataService.eliminarArrendatarios(this.DNI);
    } else {
      console.log("No existe arrendatario con ese DNI");
    }


  }


}
