import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCadastroComponent } from './components/login-cadastro/login-cadastro.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },


  {
    path: 'login-cadastro',
    component: LoginCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
