import { Component,HostListener,OnInit } from '@angular/core';
import { CarrinhoService } from '../../service/carrinho.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  
  constructor(private carrinhoService: CarrinhoService, public clienteService: ClienteService, private router: Router) {
    this.itens = this.carrinhoService.obterCarrinho();
  }
  //SERVIÇOS DO CARRINHO
  ngOnInit() {
    this.carrinhoService.carrinho$.subscribe(novoCarrinho => {
      this.itens = novoCarrinho;
    });
  }
  
  transformValue: string | undefined;
  ajustarPosicaoCarrinho() {
    const windowWidth = window.innerWidth;
    this.transformValue = windowWidth > 1920 ? 'translateX(calc(440px))' : 'translateX(calc(-440px))';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.ajustarPosicaoCarrinho();
  }

  esconderElemento(): void {
    this.transformValue = 'translateX(calc(-440px))';
  }
  
  mostrarElemento(): void {
    this.transformValue = 'translateX(calc(440px))';
  }

  itens: any[];
  
  removerDoCarrinho(item: any) {
    this.carrinhoService.removerDoCarrinho(item);
  }

  //BOTÕES DE SAIR E EDITAR PERFIL
  editProfile() {
    // Lógica para redirecionar para a página de edição de perfil
  }

  logoutUser() {
    this.carrinhoService.limparCarrinho();
    this.clienteService.logoutUser();
    this.router.navigate(['']);
    // Lógica para redirecionar para a página de login ou para a home, por exemplo
  }
  loginButton: any; // Adicione esta linha
}
