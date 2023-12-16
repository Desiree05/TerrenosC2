import {Component, OnInit} from '@angular/core';
import {DataServices} from "../data.services";
import {Alquiler} from "../classAlquiler.model";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Arrendatario} from "../classArrendatario.model";
import {Parcela} from "../classParcela.model";

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent implements OnInit{

  //idTerreno:number;
  idParcela:number;
  //nParcela:number;
  DNI:String="";

  fechaInicio:String="";
  periodo:String="";
  importe:number;

  idAlquiler:String; //idParcela + _ + "DNI" + _ + "fechaInicio" (ddmmaaaa)

  imprimirID:boolean=false;

  formulario:FormGroup;
  isSubmitted:boolean=false;
  arrendatarios:Arrendatario[];
  encontradoArrendatario:boolean=false;
  parcelas:Parcela[];
  encontradoParcela:boolean=false;

  constructor(private dataService:DataServices, private router:Router) {
  }

  ngOnInit() {
    this.formulario = new FormGroup({
      DNI: new FormControl(this.DNI, [Validators.required, Validators.pattern(/^\d{8}[A-Z]$/)]),
      idParcela: new FormControl(this.idParcela, [Validators.required, Validators.pattern(/^2\d{4}9\d{2}$/)]),
      fechaInicio: new FormControl(this.fechaInicio, [Validators.required, Validators.pattern(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/)]),
      periodo: new FormControl(this.periodo, [Validators.required, Validators.pattern(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/)]),
      importe: new FormControl(this.importe, [Validators.required, Validators.min(0)]),
    });
  }

  async registrarAlquiler(){

    this.imprimirID = false;
    this.encontradoArrendatario = false;
    this.encontradoParcela = false;

    //comprobar que arrendatario existe
    (await this.dataService.cargarArrendatarios()).subscribe(
      arrendatarios => {
        this.arrendatarios = Object.values(arrendatarios);
      });

    let index:number;
    for(index = 0; index < this.arrendatarios.length && !this.encontradoArrendatario; index++){
      if(this.arrendatarios[index].DNI == this.DNI){
        this.encontradoArrendatario = true;
      }
    }

    //comprobar que parcela existe
    (await this.dataService.cargarParcelas()).subscribe(
      parcelas => {
        this.parcelas = Object.values(parcelas);
      });

    for(index = 0; index < this.parcelas.length && !this.encontradoParcela; index++){
      if(this.parcelas[index].id == this.idParcela){
        this.encontradoParcela = true;
      }
    }

    //guardar el alquiler
    if(this.encontradoArrendatario && this.encontradoParcela && this.idParcela != 0 && this.DNI != "" && this.fechaInicio != "" && this.periodo != "" && this.importe){
      this.idAlquiler = this.idParcela + "_" + this.DNI +  "_" + this.fechaInicio;
      let alquiler = new Alquiler(this.idAlquiler, this.idParcela, this.DNI, this.fechaInicio, this.periodo, this.importe);

      await this.dataService.guardarAlquiler(alquiler, this.idAlquiler);
      this.imprimirID = true;
    } else{
      console.log("No has rellenado todos los datos del alquiler o los datos son incorrectos")
    }

  }

  submitForm(){
    this.isSubmitted = true;
  }

}
