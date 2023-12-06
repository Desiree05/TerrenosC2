import { Component } from '@angular/core';
import {DataServices} from "../data.services";
import {Arrendatario} from "../classArrendatario.model";

@Component({
  selector: 'app-arrendatario-ver',
  templateUrl: './arrendatario-ver.component.html',
  styleUrls: ['./arrendatario-ver.component.css']
})
export class ArrendatarioVerComponent {

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


  async consultarArrendatario() {
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
      this.arrendatarioEncontrado = this.arrendatarios[index - 1];

    } else {
      console.log("No existe arrendatario con ese DNI");
    }

  }

}
