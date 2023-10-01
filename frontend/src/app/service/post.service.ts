import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(environment.api_url + 'post', { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  recuperarOptionsHeaders() {
    let pessoa = JSON.parse(localStorage.getItem('pessoa')?? "");
    const options = new HttpHeaders().set('authorization', "Bearer " + pessoa.jwt).set('Content-Type', 'application/json');
    return options;
  }
}