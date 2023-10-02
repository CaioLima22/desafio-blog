import { Component } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

  constructor(private postService: PostService){};

  posts: Post[] = [];

  ngOnInit() {
    this.recuperarPosts();
  }

  recuperarPosts(){
    this.postService.findAll()
      .subscribe((response: any) => {
        if (response) {
          this.posts = response; 
        }
      });
  }

  receberEvent(event: any){
    switch(event){
      case "delete":
        this.recuperarPosts();
        break;
      case "abrirPost":
        this.recuperarPosts;
        break;
    }
  }
}
