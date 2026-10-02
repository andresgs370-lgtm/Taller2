import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbarcomponent } from './components/navbarcomponent/navbarcomponent';
import { Footercomponent } from './components/footercomponent/footercomponent';
import { Paiscomponent } from './components/paiscomponent/paiscomponent';
import { Paginacomponents } from './components/paginacomponents/paginacomponents';
import { Buscarcomponent } from './components/buscarcomponent/buscarcomponent';
import { Paisescomponent } from './components/paisescomponent/paisescomponent';

@NgModule({
  declarations: [
    App,
    Navbarcomponent,
    Footercomponent,
    Paiscomponent,
    Paginacomponents,
    Buscarcomponent,
    Paisescomponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
