import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  
  private apiUrl = 'http://localhost:8080/libro';
  constructor(private http:HttpClient) { }
   
  listarLibros():Observable<Libro[]>{
    return this.http.get<Libro[]>(this.apiUrl);
   }
  
   buscarLibro(id:number):Observable<Libro>{
    return this.http.get<Libro>(`${this.apiUrl}/${id}`);
   }

   guardarLibro(libro: Libro): Observable<Libro> {
    const { id, ...libroWithoutId } = libro;
    return this.http.post<Libro>(this.apiUrl, libroWithoutId);
  }
   actualizarLibro(libro:Libro){
    return this.http.put(this.apiUrl, libro);
   }
   eliminarLibro(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`);
   }
}
