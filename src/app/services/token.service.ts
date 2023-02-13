import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private cookieService: CookieService) { }

  getPayload() { 
    const token = this.getToken();
    let payload;
    if (token) { }
    payload = token.split('.')[1];
    payload = JSON.parse(window.atob(payload)); 
    console.log(payload.user);
    return payload.user;
   }
  
  setToken(token:string) {
    this.cookieService.set('token',token)
  }
  getToken() {
   return this.cookieService.get('token')
  }
  deleteToken() {
    this.cookieService.delete('token')
  }
}
