import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

// Key


@Injectable()
export class AuthInterceptor implements HttpInterceptor
    {

        constructor(private login:LoginService){}

        intercept(
        req: HttpRequest<any>,
        next: HttpHandler
        ):Observable<HttpEvent<any>> {
            const token =this.login.getToken();
            let authReq=req;

            if(token!=null){
                authReq=authReq.clone({
                   setHeaders:{Authorization:`Bearer ${token}`} ,
                })
            }
            return next.handle(authReq)
        }
    }

export const authInterceptorproviders=[
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
},
]