import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  constructor(private postService: PostService, private router: Router) { };

  @Input()
  post: Post = new Post();

  @Output()
  postEvent = new EventEmitter();

  validateAutorPost() {
    if (localStorage.getItem('pessoa')) {
      return this.post.autor_id === JSON.parse(localStorage.getItem('pessoa') ?? "").id;
    } else {
      return false
    }
  }

  excluirPost() {
    this.postService.delete(this.post).subscribe((result: any) => {
      if (result) {
        this.postEvent.emit('delete');
      }
    });
  }

  navigatePost() {
    this.router.navigate(["post/" + this.post.id])
  }

}
