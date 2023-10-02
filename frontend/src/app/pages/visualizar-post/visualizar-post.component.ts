import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-visualizar-post',
  templateUrl: './visualizar-post.component.html',
  styleUrls: ['./visualizar-post.component.scss']
})
export class VisualizarPostComponent {

  post: Post = new Post();

  constructor(private postService: PostService ,private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.recuperarPost(id);
    });
    
  }

  recuperarPost(id:number){
    this.postService.findById(id).subscribe((response : any) => {
      if(response){
        this.post = response;
      }
    });
  }

}
