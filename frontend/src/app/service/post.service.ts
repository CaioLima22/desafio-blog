import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';
import { Post } from '../model/post';
import { Comentario } from '../model/comentario';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(environment.api_url + 'post', { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  findById(idPost: number) {
    return this.http.get(environment.api_url + 'post/' + idPost, { headers: this.recuperarOptionsHeaders() });
  }

  findComentarios(idPost: number) {
    return this.http.get(environment.api_url + 'post/comentario/' + idPost, { headers: this.recuperarOptionsHeaders() });
  }

  salvarComentario(comentario: Comentario) {
    return this.http.post(environment.api_url + 'post/comentario', comentario, { headers: this.recuperarOptionsHeaders() });
  }

  deleteComentario(idComentario: number) {
    return this.http.delete(environment.api_url + 'post/comentario/' + idComentario, {headers: this.recuperarOptionsHeaders()});
  }

  save(post: Post) {
    return this.http.post(environment.api_url + 'post', post, {headers: this.recuperarOptionsHeaders()});
  }

  delete(post: Post) {
    return this.http.delete(environment.api_url + 'post/' + post.id, {headers: this.recuperarOptionsHeaders()});
  }

  recuperarOptionsHeaders() {
    if(localStorage.getItem('pessoa')){
      let pessoa = JSON.parse(localStorage.getItem('pessoa')?? "");
      const options = new HttpHeaders().set('authorization', "Bearer " + pessoa.jwt).set('Content-Type', 'application/json');
      return options;
    }else{
      return new HttpHeaders().set('Content-Type', 'application/json')
    }
  }
}
