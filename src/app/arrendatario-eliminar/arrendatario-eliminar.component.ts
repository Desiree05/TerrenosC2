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

    try {
     await this.dataService.eliminarArrendatarios(this.DNI);
    } catch (e) {
      console.log("No se ha encontrado ese arrendatario con DNI " + this.DNI);
    }

  }


}
