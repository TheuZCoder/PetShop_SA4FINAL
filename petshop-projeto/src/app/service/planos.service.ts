import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanosService {
  private dbUrl = 'http://localhost:3000/planos'; // Substitua pelo caminho real para o seu arquivo DB.json

  constructor(private http: HttpClient) {}

  getPlanos(): Observable<any[]> {
    return this.http.get<any[]>(this.dbUrl).pipe(
      tap(data => console.log('Dados recuperados:', data)),
      catchError(error => {
        console.error('Erro ao recuperar dados:', error);
        return throwError(error);
      })
    );
  }
}
