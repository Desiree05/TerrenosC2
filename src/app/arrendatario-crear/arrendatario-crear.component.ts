import { Component } from '@angular/core';
import {Arrendatario} from "../classArrendatario.model";
import {DataServices} from "../data.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-arrendatario-crear',
  templateUrl: './arrendatario-crear.component.html',
  styleUrls: ['./arrendatario-crear.component.css']
})
export class ArrendatarioCrearComponent {

  DNI:String;
  nombre:String;
  apellido:String;
  email:String;
  edad:number;



  constructor(private dataService:DataServices, private router:Router) {
  }


  async registrarArrendatarios(){

    if(this.edad >= 18 && this.DNI != "" && this.nombre != "" && this.apellido != "" && this.email != ""){
      let arrendatario = new Arrendatario(this.DNI, this.nombre, this.apellido, this.email, this.edad);
      await this.dataService.guardarArrendatarios(arrendatario, this.DNI);

      console.log("Arrendatario con DNI: " + arrendatario.DNI + " creado con éxito");
      this.router.navigate(["/arrendatarios"]);
    } else{
      console.log("Rellene los campos adecuadamente. Edad: " + this.edad + " debe de ser mayor o igual a 18.");
    }

  }

}
