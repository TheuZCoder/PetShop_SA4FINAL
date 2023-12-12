import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: any[] = [];

  private carrinhoSubject = new BehaviorSubject<any[]>([]);
  carrinho$ = this.carrinhoSubject.asObservable();

  adicionarAoCarrinho(item: any) {
    const carrinhoAtual = this.carrinhoSubject.value;
    carrinhoAtual.push(item);
    this.carrinhoSubject.next([...carrinhoAtual]);
  }

  obterCarrinho() {
    return this.carrinhoSubject.value;
  }

  removerDoCarrinho(item: any) {
    const carrinhoAtual = this.carrinhoSubject.value;
    const index = carrinhoAtual.indexOf(item);

    if (index !== -1) {
      carrinhoAtual.splice(index, 1);
      this.carrinhoSubject.next([...carrinhoAtual]);
    }
  }
  limparCarrinho() {
    this.carrinhoSubject.next([]);
  }
}
