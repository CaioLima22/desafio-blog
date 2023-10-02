import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-novo-post',
  templateUrl: './novo-post.component.html',
  styleUrls: ['./novo-post.component.scss']
})
export class NovoPostComponent {

  constructor(private postService: PostService, private router: Router){};

  post: Post = new Post();

  ngOnInit(){
    if(localStorage.getItem('pessoa')){
      let pessoaLogada = JSON.parse(localStorage.getItem('pessoa')?? "");
      if(pessoaLogada && pessoaLogada.jwt){
        this.post.autor_id = pessoaLogada.id;
      }else{
        this.router.navigate(["/feed"]);
      }
    }else{
      this.router.navigate(["/feed"]);
    }
  }

  onSubmit() {
    this.postService.save(this.post).subscribe((response: any) => {
        if (response) {
          this.router.navigate(["/feed"]);
        }
      }, (error) => {
        console.log(error);
      });
    console.log(this.post);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.post.image = file;
  }

}
