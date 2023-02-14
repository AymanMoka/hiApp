import { Posts } from './../model/postsModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  addPost(post: string): Observable<Posts> {
    return this.http.post<Posts>(`${environment.apiUrl}/post/add-post`, post);
  }
  getAllPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${environment.apiUrl}/post/all`);
  }

  likePost(post: Posts): Observable<Posts> {
    return this.http.post<Posts>(`${environment.apiUrl}/post/like-post`, post);
  }
  addComment(postId: string, comment: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/post/add-comment`, { postId, comment });
  }

  getPostById(postId: string): Observable<Posts> {
    return this.http.get<Posts>(`${environment.apiUrl}/post/${postId}`);
  }


}
