import { Component } from '@angular/core';
import { CarrinhoService } from '../../service/carrinho.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {
  itens = [
    { nome: 'Item 1', preco: 10 },
    { nome: 'Item 2', preco: 15 },
    { nome: 'Item 3', preco: 20 },
  ];

  constructor(private carrinhoService: CarrinhoService) {}

  adicionarAoCarrinho(item: any) {
    this.carrinhoService.adicionarAoCarrinho(item);
  }
}
