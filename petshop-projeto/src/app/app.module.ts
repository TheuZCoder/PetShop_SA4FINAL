import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginCadastroComponent } from './components/login-cadastro/login-cadastro.component';
import { CarouselModule } from '@coreui/angular';
import { HomeComponent } from './view/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BannerInformacoesComponent } from './components/banner-informacoes/banner-informacoes.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { AgendamentoComponent } from './components/agendamento/agendamento.component';
import { LoginComponent } from './view/login/login.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { PgServicoComponent } from './view/pg-servico/pg-servico.component';
import { FaleConoscoComponent } from './components/fale-conosco/fale-conosco.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegrasComponent } from './components/regras/regras.component';
import { RegraViewComponent } from './view/regra-view/regra-view.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginCadastroComponent,
    HomeComponent,
    CarouselComponent,
    BannerInformacoesComponent,
    ComentariosComponent,
    SobreNosComponent,
    AgendamentoComponent,
    LoginComponent,
    ServicosComponent,
    PgServicoComponent,
    FaleConoscoComponent,
    RegrasComponent,
    RegraViewComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
