import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../../service/carrinho.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { PlanosService } from 'src/app/service/planos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit{
  itens!: any[];

  constructor(private carrinhoService: CarrinhoService, private clienteService: ClienteService, private planosService: PlanosService) {}
  ngOnInit(): void {
    this.planosService.getPlanos().subscribe((planos) => {
      this.itens = planos;
    });
  }

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
