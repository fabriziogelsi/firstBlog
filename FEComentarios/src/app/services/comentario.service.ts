import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { comentario } from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  myApiUrl = 'https://localhost:44374/';
  myApiController = 'api/Comentario/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getListComentarios(): Observable<comentario[]> {
    return this.http.get<comentario[]>(this.myApiUrl + this.myApiController);
  }

  deleteComentario(id: number): Observable<comentario> {
    return this.http.delete<comentario>(this.myApiUrl + this.myApiController + id);
  }

  guardarComentario(comentario: comentario): Observable<comentario> {
    return this.http.post<comentario>(this.myApiUrl + this.myApiController, comentario, this.httpOptions);
  }

  cargarComentario(id: number): Observable<comentario> {
    return this.http.get<comentario>(this.myApiUrl + this.myApiController + id);
  }

  actualizarComentario(id: number, comentario: comentario): Observable<comentario> {
    return this.http.put<comentario>(this.myApiUrl + this.myApiController + id, comentario, this.httpOptions);
  }

}
