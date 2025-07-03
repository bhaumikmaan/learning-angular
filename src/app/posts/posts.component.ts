import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {PostService} from '../services/post.service';

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
    })
  }
  constructor(private service: PostService) {
  }

  createPost(input: HTMLInputElement){
    let post:any = {title: input.value};
    input.value = '';
    this.service.createPost(post).subscribe(response => {
      post['id'] = response.id;
      this.posts.splice(0,0,post);
    })
  }

  updatePost(post: { id: string; }){
    this.service.updatePost(post).subscribe(response => {
      console.log(response);
    })
  }

  deletePost(post: { id: string; }){
    this.service.deletePost(post).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      console.log(response);
    })
  }
}
