import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Cliente } from '../modelo/cliente.model';
import { CarrinhoService } from './carrinho.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient, private carrinhoService: CarrinhoService) {}
  private apiUrl = 'http://localhost:3000/clientes';
  public isLoggedIn = false; // Torna a propriedade pública

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }


  cadastrarCliente(cliente: any): Observable<any> {
    return this.http.post(this.apiUrl, cliente);
  }

  getUsers(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  loginUser(username: string, password: string): Observable<boolean> {
    return this.getUsers().pipe(
      map((users: Cliente[]) => {
        const user = users.find(u => u.email.toLowerCase() === username.toLowerCase() && u.senha === password);
        this.isLoggedIn = !!user;
        return this.isLoggedIn;
      })
    );
  }

  logoutUser(): void {
    this.isLoggedIn = false;
    this.carrinhoService.limparCarrinho();
  }
}
