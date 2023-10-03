import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
import { Pessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  options = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  login(pessoa: Pessoa) {
    return this.http.post(environment.api_url + 'auth/login', pessoa, { headers: this.options });
  }

  cadastro(pessoa: Pessoa) {
    return this.http.post(environment.api_url + 'auth/create', pessoa, { headers: this.options });
  }
}
