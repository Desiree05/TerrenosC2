import {Component, OnInit} from '@angular/core';
import {DataServices} from "../data.services";
import {Alquiler} from "../classAlquiler.model";
import {Arrendatario} from "../classArrendatario.model";
import {ThisReceiver} from "@angular/compiler";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-generar-informe',
  templateUrl: './generar-informe.component.html',
  styleUrls: ['./generar-informe.component.css']
})
export class GenerarInformeComponent implements OnInit{


  searchDNI:String;
  arrendatarioEncontrado:Arrendatario;
  arrendatarios:Arrendatario[];
  alquileres:Alquiler[] = [];
  alquilerFinds:Alquiler[] = [];
  encontrado:boolean;
  alquileresEncontrado:boolean;

  formulario:FormGroup;
  isSubmitted:boolean=false;


  constructor(private dataService:DataServices) {

  }

  ngOnInit(){
    this.formulario = new FormGroup({
      DNI: new FormControl(this.searchDNI, [Validators.required, Validators.pattern(/^\d{8}[A-Z]$/)]),
      });
  }

  //print datos del arrendatario (DNI, nombre, apellidos)
  async consultarArrendatario() {
    this.encontrado = false;

    (await this.dataService.cargarArrendatarios()).subscribe(
      arrendatarios => {
        this.arrendatarios = Object.values(arrendatarios);
      });

    (await this.dataService.cargarAlquiler()).subscribe(
      alquileres => {
        this.alquileres = Object.values(alquileres);
      });

    let index: number;
    for (index = 0; index < this.arrendatarios.length && !this.encontrado; index++) {
      if (this.arrendatarios[index].DNI == this.searchDNI) {
        this.encontrado = true;
        this.arrendatarioEncontrado = this.arrendatarios[index];

      }
    }

    if (!this.encontrado) {
      console.log("Arrendatario no: ", this.searchDNI);
      console.log("No existe arrendatario con ese DNI");
    } else{
      console.log("Arrendatario sí: ", this.searchDNI);
    }



  }


  async consultarAlquileresDeArrendatario(){

    this.alquileresEncontrado = false;

    //encontrar los alquileres que ha realizado
    if(this.alquileres !== undefined && this.alquileres !== null){
      let index:number;
      for(index = 0; index < this.alquileres.length; index++){
        if(this.alquileres[index].DNI == this.searchDNI){
          //guardar alquileres del arrendatario
          this.alquileresEncontrado = true;
          this.alquilerFinds.push(this.alquileres[index]);
        }
      }

      if(!this.alquileresEncontrado){
        console.log("No se encontró ningún alquier con el DNI: " + this.searchDNI)
      }

    }

  }

  submitForm(){
    this.isSubmitted = true;
  }

}
