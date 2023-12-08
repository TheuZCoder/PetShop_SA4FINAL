import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
