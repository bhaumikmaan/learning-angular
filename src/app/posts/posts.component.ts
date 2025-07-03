import {Component} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'posts',
  imports: [HttpClientModule , CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: any[] = [];
  private url = 'http://jsonplaceholder.typicode.com/posts';
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    http.get<any[]>(this.url).subscribe(response => {
      this.posts = response ;
      console.log(response);
    })
  }

  createPost(input: HTMLInputElement){
    let post:any = {title: input.value};
    input.value = '';
    this.http.post<{ id: number }>(this.url,JSON.stringify(post)).subscribe(response => {
      post['id'] = response.id;
      this.posts.splice(0,0,post);
    })
  }

  updatePost(post: { id: string; }){
    this.http.patch(this.url + '/' + post.id , JSON.stringify({isRead:true})).subscribe(response => {
      console.log(response);
    })
  }

  deletePost(post: { id: string; }){
    this.http.delete(this.url + '/' + post.id).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      console.log(response);
    })
  }
}
