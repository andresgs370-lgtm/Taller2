import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Paiscomponent } from './components/paiscomponent/paiscomponent';
import {Paginacomponents} from './components/paginacomponents/paginacomponents';
import {Buscarcomponent} from './components/buscarcomponent/buscarcomponent';
import {Paisescomponent} from './components/paisescomponent/paisescomponent';


const routes: Routes = [

  { path: '', component: Paginacomponents },
  { path: 'nuevoPais', component: Paiscomponent },
  { path: 'BuscarPais', component: Buscarcomponent },
  { path: 'Paises', component: Paisescomponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
