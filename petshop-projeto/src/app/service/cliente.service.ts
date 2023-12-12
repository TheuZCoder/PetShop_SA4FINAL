import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Cliente } from '../modelo/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes';
  public isLoggedIn = false; // Torna a propriedade pública

  isAuthenticated(): boolean {
    // Sua lógica de verificação de autenticação aqui
    return this.isLoggedIn;
  }

  constructor(private http: HttpClient) {}

  cadastrarCliente(cliente: any): Observable<any> {
    return this.http.post(this.apiUrl, cliente);
  }

  fazerLogin(email: string, senha: string): Observable<boolean> {
    return this.http.get<Cliente[]>(`${this.apiUrl}?email=${email}&senha=${senha}`).pipe(
      map((users: Cliente[]) => {
        const user = users[0]; // Supondo que apenas um usuário corresponderá ao login
        if (user) {
          this.isLoggedIn = true;
        }
        return !!user; // Retorna true se o usuário for encontrado, false caso contrário
      }),
      catchError(error => {
        this.isLoggedIn = false;
        return of(false);
      })
    );
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
  }
}
