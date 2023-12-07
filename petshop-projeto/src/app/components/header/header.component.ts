import { Component,OnInit } from '@angular/core';
import { CarrinhoService } from '../../service/carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  displayValue: string = 'none';

  mostrarElemento(): void {
    this.displayValue = 'block';
  }

  esconderElemento(): void {
    this.displayValue = 'none';
  }
  itens: any[];

  constructor(private carrinhoService: CarrinhoService) {
    this.itens = this.carrinhoService.obterCarrinho();
  }
  removerDoCarrinho(item: any) {
    this.carrinhoService.removerDoCarrinho(item);
  }
}
