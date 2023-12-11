import { Component,OnInit } from '@angular/core';
import { CarrinhoService } from '../../service/carrinho.service';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  
  transformValue: string = 'translateX(calc(-420px))';

  mostrarElemento(): void {
    this.transformValue = 'translateX(calc(-20px))';
  }

  esconderElemento(): void {
    this.transformValue = 'translateX(calc(-420px))';
  }
  itens: any[];

  constructor(private carrinhoService: CarrinhoService, public clienteService: ClienteService) {
    this.itens = this.carrinhoService.obterCarrinho();
  }
  removerDoCarrinho(item: any) {
    this.carrinhoService.removerDoCarrinho(item);
  }
  editProfile() {
    // Lógica para redirecionar para a página de edição de perfil
  }

  logoutUser() {
    this.clienteService.logoutUser();
    // Lógica para redirecionar para a página de login ou para a home, por exemplo
  }
  loginButton: any; // Adicione esta linha
}
