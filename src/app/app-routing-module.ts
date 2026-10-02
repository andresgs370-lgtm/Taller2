import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Paiscomponent } from './components/paiscomponent/paiscomponent';

const routes: Routes = [
  { path: 'nuevo-pais', component: Paiscomponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
