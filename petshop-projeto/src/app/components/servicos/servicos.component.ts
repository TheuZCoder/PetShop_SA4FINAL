import { Component } from '@angular/core';
import { CarrinhoService } from '../../service/carrinho.service';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {
  itens = [
    { nome: 'Diaria', preco: 'R$'+72 },
    { nome: '1 Semana', preco: 'R$'+ 145 },
    { nome: '2 Semana', preco: 'R$'+ 185 },
    { nome: '3 Semana', preco: 'R$'+ 254 },
    { nome: '1 Mês', preco: 'R$'+ 268 },
    { nome: '6 Mêses', preco: 'R$'+'400,50' },
  ];

  constructor(private carrinhoService: CarrinhoService, private clienteService: ClienteService) {}

  selecionarItem(item: any) {
    this.itemSelecionado = item;
  }

  itemSelecionado: any;

  adicionarAoCarrinho() {
    if (this.clienteService.isAuthenticated()) {
      if (this.itemSelecionado) {
        this.carrinhoService.adicionarAoCarrinho(this.itemSelecionado);
        this.itemSelecionado = null;
      }
    } else {
      console.log('Você precisa estar logado para adicionar itens ao carrinho.');
    }
  }
}
