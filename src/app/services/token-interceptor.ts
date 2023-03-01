import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable()
export class TokenInterceptor {
    helper = new JwtHelperService();
    constructor(private tokenService: TokenService, private router:Router) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.tokenService.getToken();
        if (token) {
            if (this.helper.isTokenExpired(token)) {
                this.tokenService.deleteToken(); // delete token if token is null
                this.router.navigate(['']); // navigate to home page
            } else {
                request = request.clone({
                    setHeaders: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        Authorization: `Bearer ${this.tokenService.getToken()}`, // add token to request header
                    }
                });
            }
          
        }
        return next.handle(request);
    }
}
