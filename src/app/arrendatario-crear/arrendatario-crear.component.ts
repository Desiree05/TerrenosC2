import {Component, OnInit} from '@angular/core';
import {Arrendatario} from "../classArrendatario.model";
import {DataServices} from "../data.services";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-arrendatario-crear',
  templateUrl: './arrendatario-crear.component.html',
  styleUrls: ['./arrendatario-crear.component.css']
})
export class ArrendatarioCrearComponent implements OnInit{

  DNI:String="";
  nombre:String="";
  apellido:String="";
  email:String="";
  edad:number;
  imprimirID:boolean=false;

  formulario:FormGroup;
  isSubmitted=false;



  constructor(private dataService:DataServices, private router:Router) {
  }

  ngOnInit() {
    this.formulario = new FormGroup({
      DNI: new FormControl(this.DNI, [Validators.required, Validators.pattern(/^\d{8}[A-Z]$/)]),
      nombre: new FormControl(this.nombre, [Validators.required, Validators.pattern(/^[A-Za-zÁÉÍÓÚáéíóúÀÈÌÒÙàèìòù]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÀÈÌÒÙàèìòù]+)?$/)]),
      apellido: new FormControl(this.apellido, [Validators.required, Validators.pattern(/^[A-Za-zÁÉÍÓÚáéíóúÀÈÌÒÙàèìòù]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÀÈÌÒÙàèìòù]+)?$/)]),
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      edad: new FormControl(this.edad, [Validators.required, Validators.min(18)]),
    });
  }


  async registrarArrendatarios(){

    this.imprimirID = false;

    if(this.edad >= 18 && this.DNI != "" && this.nombre != "" && this.apellido != "" && this.email != ""){
      let arrendatario = new Arrendatario(this.DNI, this.nombre, this.apellido, this.email, this.edad);
      await this.dataService.guardarArrendatarios(arrendatario, this.DNI);

      console.log("Arrendatario con DNI: " + arrendatario.DNI + " creado con éxito");
      this.imprimirID = true;

    } else{
      console.log("Rellene los campos adecuadamente.");
    }

  }

  submitForm(){
    this.isSubmitted = true;
  }

}
