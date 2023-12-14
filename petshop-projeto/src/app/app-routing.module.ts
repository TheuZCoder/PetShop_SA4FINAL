import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { PgServicoComponent } from './view/pg-servico/pg-servico.component';
import { RegraViewComponent } from './view/regra-view/regra-view.component';
import { InfoPetshopComponent } from './components/info-petshop/info-petshop.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },


  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pg-servico',
    component: PgServicoComponent
  },
  {
    path: 'pg-regras',
    component: RegraViewComponent
  },
  {
    path: 'pg-sobre-nos',
    component: InfoPetshopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
