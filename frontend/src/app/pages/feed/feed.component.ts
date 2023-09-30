import { Component } from '@angular/core';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

  posts: Post[] = [
    {
      titulo: 'Título do Post 1',
      conteudo: 'Conteúdo do Post 1'
    },
    {
      titulo: 'Título do Post 2',
      conteudo: 'Conteúdo do Post 2'
    },
  ];
}
