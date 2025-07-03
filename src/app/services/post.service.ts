import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  http:HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getPosts(){
    return this.http.get<any>(this.url);
  }
  createPost(post:any){
    return this.http.post<{ id: number }>(this.url,JSON.stringify(post));
  }
  updatePost(post:any){
    return this.http.patch(this.url + '/' + post.id , JSON.stringify({isRead:true}));
  }
  deletePost(post:any){
    return this.http.delete(this.url + '/' + post.id);
  }
}
