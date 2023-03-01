import { User } from './../model/user';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  getAllUsers():Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/all-users`);
  }
}
