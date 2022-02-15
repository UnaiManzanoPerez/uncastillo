import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaCastellanoComponent } from './carta-castellano/carta-castellano.component';
import { CartaCatalaComponent } from './carta-catala/carta-catala.component';
import { InformacionComponent } from './informacion/informacion.component';

const routes: Routes = [
  {path:"catalan",component:CartaCatalaComponent},
  {path:"castellano",component:CartaCastellanoComponent},
  {path:"informacion",component:InformacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
