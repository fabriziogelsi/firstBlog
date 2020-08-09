import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  myApiUrl = 'https://localhost:44374/';
  myApiController = 'api/Comentario';

  httpOptions = {
    headers: new Headers({
      'Content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }
}
