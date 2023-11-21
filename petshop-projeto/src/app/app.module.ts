import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginCadastroComponent } from './components/login-cadastro/login-cadastro.component';
import { CarroselComponent } from './components/carrosel/carrosel.component';
import { CarouselModule } from '@coreui/angular';
import { HomeComponent } from './view/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginCadastroComponent,
    CarroselComponent,
    HomeComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
