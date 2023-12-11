import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Cliente } from '../modelo/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes'; // Altere conforme necessário

  constructor(private http: HttpClient) {}

  cadastrarCliente(cliente: any): Observable<any> {
    return this.http.post(this.apiUrl, cliente);
  }

  fazerLogin(email: string, senha: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?email=${email}&senha=${senha}`);
  }

  getUsers(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  loginUser(username: string, password: string): Observable<boolean> {
    return this.getUsers().pipe(
      map((users: Cliente[]) => {
        const user = users.find(u => u.email.toLowerCase() === username.toLowerCase() && u.senha === password);
        return !!user; // Retorna true se o usuário for encontrado, false caso contrário
      })
    );
  }
}
