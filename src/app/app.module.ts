import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaCatalaComponent } from './carta-catala/carta-catala.component';
import { CartaCastellanoComponent } from './carta-castellano/carta-castellano.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ResenasComponent } from './resenas/resenas.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaCatalaComponent,
    CartaCastellanoComponent,
    InformacionComponent,
    ResenasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
