import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  
  addPost(post: string):Observable<any>{
    return this.http.post(`${environment.apiUrl}/post/add-post`, post);
  }
}
