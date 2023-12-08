import { Component,OnInit } from '@angular/core';
import { CarrinhoService } from '../../service/carrinho.service';

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

  constructor(private carrinhoService: CarrinhoService) {
    this.itens = this.carrinhoService.obterCarrinho();
  }
  removerDoCarrinho(item: any) {
    this.carrinhoService.removerDoCarrinho(item);
  }
}
