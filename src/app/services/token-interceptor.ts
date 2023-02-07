import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';


@Injectable()
export class TokenInterceptor {
    constructor(private tokenService: TokenService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.tokenService.getToken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    Authorization: `Bearer ${this.tokenService.getToken()}`,
                }
            });
        }
        return next.handle(request);
    }
}
