import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  createUser(user: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/register`, user)
  } 

  loginUser(user: any): Observable<any>{
    return this.http.post(`${environment.apiUrl}/login`, user)
  }
}
