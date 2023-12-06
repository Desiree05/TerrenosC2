import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TerrenosComponent } from './terrenos/terrenos.component';
import {RouterModule, Routes} from "@angular/router";
import { ParcelasComponent } from './parcelas/parcelas.component';
import { ArrendatariosComponent } from './arrendatarios/arrendatarios.component';
import { TerrenoCrearComponent } from './terreno-crear/terreno-crear.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataServices} from "./data.services";
import {HttpClientModule} from "@angular/common/http";
import { TerrenoVerComponent } from './terreno-ver/terreno-ver.component';
import { TerrenoEliminarComponent } from './terreno-eliminar/terreno-eliminar.component';
import { TerrenoModificarComponent } from './terreno-modificar/terreno-modificar.component';
import { ParcelaVerComponent } from './parcela-ver/parcela-ver.component';
import { ParcelaCrearComponent } from './parcela-crear/parcela-crear.component';
import { ParcelaEliminarComponent } from './parcela-eliminar/parcela-eliminar.component';
import { ParcelaModificarComponent } from './parcela-modificar/parcela-modificar.component';

const appRoutes:Routes = [
  {path:'', component: HomeComponent},
  {path:'terrenos', component: TerrenosComponent},
  {path:'parcelas', component: ParcelasComponent},
  {path:'arrendatarios', component: ArrendatariosComponent},

  {path:'terrenos/crear', component: TerrenoCrearComponent},
  {path:'terrenos/modificar', component: TerrenoModificarComponent},
  {path:'terrenos/ver', component: TerrenoVerComponent},
  {path:'terrenos/eliminar', component: TerrenoEliminarComponent},

  {path:'parcelas/crear', component: ParcelaCrearComponent},
  {path:'parcelas/modificar', component: ParcelaModificarComponent},
  {path:'parcelas/ver', component: ParcelaVerComponent},
  {path:'parcelas/eliminar', component: ParcelaEliminarComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TerrenosComponent,
    ParcelasComponent,
    ArrendatariosComponent,
    TerrenoCrearComponent,
    TerrenoVerComponent,
    TerrenoEliminarComponent,
    TerrenoModificarComponent,
    ParcelaVerComponent,
    ParcelaCrearComponent,
    ParcelaEliminarComponent,
    ParcelaModificarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }