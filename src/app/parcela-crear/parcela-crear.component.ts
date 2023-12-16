import {Component, OnInit} from '@angular/core';
import {Terreno} from "../classTerreno.model";
import {DataServices} from "../data.services";
import {Router} from "@angular/router";
import {Parcela} from "../classParcela.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-parcela-crear',
  templateUrl: './parcela-crear.component.html',
  styleUrls: ['./parcela-crear.component.css']
})
export class ParcelaCrearComponent implements OnInit {
  id:number = 0;
  idTerreno:number; //del terreno al que pertenece la parcela
  nParcela:number;
  latitud:number;
  longitud:number;
  tamano:number;
  limites:String = "";
  disponibilidad:boolean = false;
  imprimirID:boolean = false;

  terrenos:Terreno[];
  encontradoTerreno:boolean;
  formulario:FormGroup;
  isSubmitted:boolean=false;
  tamanoIncorrecto:boolean=false;

  constructor(private dataService:DataServices, private router:Router) {
  }


  ngOnInit(){
    this.formulario = new FormGroup({
      idTerreno: new FormControl(this.idTerreno, [Validators.required, Validators.pattern(/^2\d{4}$/)]),
      latitud: new FormControl(this.latitud, [Validators.required, Validators.pattern(/^-?[1-9]\d{0,2}(,\d{3})*(?:\.\d{1,5})?$/)]),
      longitud: new FormControl(this.longitud, [Validators.required, Validators.pattern(/^-?[1-9]\d{0,2}(,\d{3})*(?:\.\d{1,5})?$/)]),
      tamano: new FormControl(this.tamano, [Validators.required, Validators.min(0)]),
      limites: new FormControl(this.limites, [Validators.required, Validators.maxLength(100)]),
      nParcela: new FormControl(this.nParcela, [Validators.required, Validators.min(1), Validators.max(99)])
    });
  }

  async registrarParcela() {
    this.imprimirID = false;
    this.encontradoTerreno = false;
    this.tamanoIncorrecto = false;

    //si es latifundio podemos crear la parcela
    if(this.idTerreno / 10000 >= 2.0){
      this.id = (this.idTerreno*1000) + (this.nParcela+900);

      //comprobamos que existe el terreno
      (await this.dataService.cargarTerrenos()).subscribe(
        terrenos => {
          this.terrenos = Object.values(terrenos);
        });

      let index:number;
      for(index = 0; index < this.terrenos.length && !this.encontradoTerreno; index++){
        if(this.terrenos[index].id == this.idTerreno){
          this.encontradoTerreno = true;
          if(this.terrenos[index].tamano < this.tamano){
            this.tamanoIncorrecto = true;
          }
        }
      }

      //comprobamos el resto del formulario
      if(this.encontradoTerreno && this.nParcela % 100 == this.nParcela && this.latitud != 0 && this.longitud != 0 && this.tamano > 0 && this.limites != ""){
        //usar Forms: mirar que los datos sean correctos (>0, al menos 5 decimales coordenadas, que no sean null)

        let parcela = new Parcela(this.id, this.idTerreno, this.nParcela, this.latitud, this.longitud, this.tamano, this.limites, this.disponibilidad);
        await this.dataService.guardarParcelas(parcela, this.id);

        this.imprimirID = true;

      } else{
        if(!this.encontradoTerreno){
          console.log("El terreno no existe")
        } else{
          console.log("No has rellenado todos los datos de la parcela")
        }
      }

      this.disponibilidad = false;

    } else{
      console.log("El terreno no es un latifundio, por lo que no se puede crear la parcela");
    }

  }

  submitForm(){
    this.isSubmitted = true;
  }


}
