import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { LoginCadastroComponent } from './components/login-cadastro/login-cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: FirstPageComponent
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
