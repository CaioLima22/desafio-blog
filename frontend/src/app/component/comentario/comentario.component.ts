import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comentario } from 'src/app/model/comentario';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent {  

    @Input()
    comentario: Comentario = new Comentario();

    @Output()
    postEvent = new EventEmitter();

    constructor(private postService: PostService){}

    validateAutorComentario() {
      if (localStorage.getItem('pessoa')) {
        return this.comentario.autor.id === JSON.parse(localStorage.getItem('pessoa') ?? "").id;
      } else {
        return false
      }
    }

    excluirComentario() {
      this.postService.deleteComentario(this.comentario.id).subscribe((result: any) => {
        if (result) {
          this.postEvent.emit('deleteComentario');
        }
      });
    }
}
