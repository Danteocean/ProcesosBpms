import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { RegistroComponent } from './paginas/registro/registro.component';

const routes: Routes = [{ path: '##', redirectTo: '/' },
{path:'',component:InicioComponent},
{path:'inicio',component:InicioComponent},
{path:'registro',component:RegistroComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
