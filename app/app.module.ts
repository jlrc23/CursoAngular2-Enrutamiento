import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { InicioComponent } from './inicio.component'
import { NosotrosComponent } from './nosotros.component'
import { ContactenosComponent } from './contactenos.component'

import { routing } from './app.routing'

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, 
                  InicioComponent, 
                  NosotrosComponent, 
                  ContactenosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
