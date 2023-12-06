export class Arrendatario {

  constructor(DNI:String, nombre:String, apellido:String, email:String, edad:number) {
    this.DNI = DNI;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.edad = edad;
  }

  DNI:String = "";
  nombre:String = "";
  apellido:String = "";
  email:String = "";
  edad:number = 0;

}
