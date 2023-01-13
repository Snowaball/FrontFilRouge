import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, exhaustMap, take } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private _headerName = 'Authorization';
  private _tokenPrefix = 'Basic';

  constructor(
    private authService: AuthService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    return this.authService.currentUser$.pipe(
      take(1),
      exhaustMap((user) => {

        if(user.token){
            const setHeaders: any = {};
            setHeaders[this._headerName] = `${this._tokenPrefix} ${user.token}`;
            const modifiedRequest = request.clone({ setHeaders })            
            return next.handle(modifiedRequest);
        }

        return next.handle(request);
        
      })
    )
    
  }
}