import { Component,OnInit } from '@angular/core';
import { CarrinhoService } from '../../service/carrinho.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  ngOnInit() {
    this.carrinhoService.carrinho$.subscribe(novoCarrinho => {
      this.itens = novoCarrinho;
    });
  }
  
  transformValue: string = 'translateX(calc(-885px))';

  mostrarElemento(): void {
    this.transformValue = 'translateX(calc(-495px))';
  }

  esconderElemento(): void {
    this.transformValue = 'translateX(calc(-885px))';
  }
  itens: any[];

  constructor(private carrinhoService: CarrinhoService, public clienteService: ClienteService, private router: Router) {
    this.itens = this.carrinhoService.obterCarrinho();
  }
  removerDoCarrinho(item: any) {
    this.carrinhoService.removerDoCarrinho(item);
  }
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
