import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {PostService} from '../services/post.service';
import {AppError} from '../services/app-error';

@Component({
  selector: 'posts',
  imports: [HttpClientModule , CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.posts = response ;
      console.log(response);
    }, error => {
      alert('An unexpected error has occurred');
      console.log('An unexpected error has occurred');
    })
  }
  constructor(private service: PostService) {
  }

  createPost(input: HTMLInputElement){
    let post:any = {title: input.value};
    this.posts.splice(0,0,post);
    input.value = '';
    this.service.createPost(post).subscribe(response => {
      post['id'] = response.id;
    }, (error: Response) => {
      this.posts.splice(0,1);
      if (error.status === 400) {
        // this.form.setErrors(error);
      }else{
        alert('An unexpected error has occurred');
        console.log('An unexpected error has occurred');
      }
    })
  }

  updatePost(post: { id: string; }){
    this.service.updatePost(post).subscribe(response => {
      console.log(response);
    }, error => {
      alert('An unexpected error has occurred');
      console.log('An unexpected error has occurred');
    })
  }

  deletePost(post: { id: string; }){
    this.service.deletePost(post).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      console.log(response);
    }, (error: Response) => {
      // Expected Errors
      if (error instanceof AppError){
        alert('This post has already been deleted');
      }else{
        alert('An unexpected error has occurred');
        console.log('An unexpected error has occurred');
      }
    })
  }
}
