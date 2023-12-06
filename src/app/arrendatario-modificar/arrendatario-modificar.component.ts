import { Component } from '@angular/core';
import {Arrendatario} from "../classArrendatario.model";
import {DataServices} from "../data.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-arrendatario-modificar',
  templateUrl: './arrendatario-modificar.component.html',
  styleUrls: ['./arrendatario-modificar.component.css']
})
export class ArrendatarioModificarComponent {


  DNI: String;
  nombre: String;
  apellido: String;
  email: String;
  edad: number;
  arrendatarios: Arrendatario[];
  arrendatarioEncontrado: Arrendatario;
  encontrado: boolean;

  constructor(private dataService: DataServices, private router: Router) {

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
      this.DNI = this.arrendatarioEncontrado.DNI;
      this.nombre = this.arrendatarioEncontrado.nombre;
      this.apellido = this.arrendatarioEncontrado.apellido;
      this.email = this.arrendatarioEncontrado.email;
      this.edad = this.arrendatarioEncontrado.edad;

    } else {
      console.log("No existe arrendatario con ese DNI");
    }

  }


  async registrarArrendatarios() {

    if (this.edad >= 18 && this.DNI != "" && this.nombre != "" && this.apellido != "" && this.email != "") {
      let arrendatario = new Arrendatario(this.DNI, this.nombre, this.apellido, this.email, this.edad);
      await this.dataService.guardarArrendatarios(arrendatario, this.DNI);

      console.log("Arrendatario con DNI: " + arrendatario.DNI + " moificado con éxito");
      this.router.navigate(["/arrendatarios"]);
    }

  }
}
