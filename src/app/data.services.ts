import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Terreno} from "./classTerreno.model";
import {Parcela} from "./classParcela.model";

@Injectable()
export class DataServices{

  constructor(private httpCliente:HttpClient) {
  }

  //TERRENOS
  async cargarTerrenos(){
    return this.httpCliente.get("https://terrenos-1eb68-default-rtdb.europe-west1.firebasedatabase.app/terrenos.json");
  }

  async guardarTerrenos(terreno: Terreno, index:number){

    let url = "https://terrenos-1eb68-default-rtdb.europe-west1.firebasedatabase.app/terrenos/" + index + ".json";

    await this.httpCliente.put(url, terreno).subscribe(

      response => console.log("Guardado terreno " + response),
      error => console.log("Ha habido un error " + error)

    );
  }

  async eliminarTerrenos(id:number){

    let url = "https://terrenos-1eb68-default-rtdb.europe-west1.firebasedatabase.app/terrenos/" + id + ".json";

    await this.httpCliente.delete(url).subscribe(

      response => console.log("Terreno eliminado " + response),
      error => console.log("Ha habido un error " + error)

    );

  }

  //PARCELAS

  async cargarParcelas(){
    return this.httpCliente.get("https://terrenos-1eb68-default-rtdb.europe-west1.firebasedatabase.app/parcelas.json");
  }

  async guardarParcelas(parcela: Parcela, id:number){

    let url = "https://terrenos-1eb68-default-rtdb.europe-west1.firebasedatabase.app/parcelas/" + id + ".json";

    await this.httpCliente.put(url, parcela).subscribe(

      response => console.log("Guardado parcela " + response),
      error => console.log("Ha habido un error " + error)

    );
  }

  async eliminarParcelas(id:number){

    let url = "https://terrenos-1eb68-default-rtdb.europe-west1.firebasedatabase.app/parcelas/" + id + ".json";

    await this.httpCliente.delete(url).subscribe(

      response => console.log("Parcela eliminada " + response),
      error => console.log("Ha habido un error " + error)

    );

  }

}
