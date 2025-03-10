import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Capitulo } from '../models/capitulo';

@Injectable({
  providedIn: 'root',
})
export class CapituloService {
  private apiUrl = 'http://localhost:8080/capitulo';

  constructor(private http: HttpClient) {}

  listarCapitulos(): Observable<Capitulo[]> {
    return this.http.get<Capitulo[]>(this.apiUrl);
  }

  buscarCapitulo(id: number): Observable<Capitulo> {
    return this.http.get<Capitulo>(`${this.apiUrl}/${id}`);
  }

  guardarCapitulo(capitulo: Capitulo): Observable<Capitulo> {
    const { id, ...capituloSinId } = capitulo;
    return this.http.post<Capitulo>(this.apiUrl, capituloSinId);
  }
  

  actualizarCapitulo(capitulo: Capitulo): Observable<Capitulo> {
    return this.http.put<Capitulo>(`${this.apiUrl}/${capitulo.id}`, capitulo);
  }

  eliminarCapitulo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
