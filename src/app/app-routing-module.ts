import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Paiscomponent } from './components/paiscomponent/paiscomponent';
import {Paginacomponents} from './components/paginacomponents/paginacomponents';

const routes: Routes = [

  { path: '', component: Paginacomponents },
  { path: 'nuevoPais', component: Paiscomponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
