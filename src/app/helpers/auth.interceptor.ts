import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';


@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private authToken: AuthService){}
    intercept(req: HttpRequest<any>, next:HttpHandler){
        const authToken = this.authToken.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer" + authToken
            }
        });

        return next.handle(req);
    }
}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
]