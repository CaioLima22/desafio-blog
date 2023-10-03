import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/model/comentario';
import { Pessoa } from 'src/app/model/pessoa';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-visualizar-post',
  templateUrl: './visualizar-post.component.html',
  styleUrls: ['./visualizar-post.component.scss']
})
export class VisualizarPostComponent {

  post: Post = new Post();
  idPost!: number;
  comentarios: Comentario[] = [];
  comentario: Comentario = new Comentario();
  pessoaLogada: boolean = false;
  novoComentario: boolean = false;

  constructor(private postService: PostService ,private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.idPost = params['id'];
      this.recuperarPost(this.idPost);
    });
    if(localStorage.getItem("pessoa")){
      this.pessoaLogada = true
    }
    
  }

  recuperarPost(id:number){
    this.postService.findById(id).subscribe((response : any) => {
      if(response){
        this.post = response;
        this.recuperarComentarios(id);
      }
    });
  }

  recuperarComentarios(id:number){
    this.postService.findComentarios(id).subscribe((response:any) => {
      if(response){
        this.comentarios = response;
      }
    });
  }

  salvarComentario(){
    this.comentario.autor = new Pessoa();
    this.comentario.autor.id = JSON.parse(localStorage.getItem("pessoa") ?? "").id;
    this.comentario.idPost = this.idPost;
    this.postService.salvarComentario(this.comentario).subscribe((response:any) => {
      if(response){
        this.novoComentario = false;
        this.recuperarComentarios(this.idPost);
      }
    });
  }

  addComentario(){
    this.novoComentario = true;
  }

  receberEvent(event: any){
    switch(event){
      case "deleteComentario":
        this.recuperarComentarios(this.idPost);
        break;
    }
  }

}
