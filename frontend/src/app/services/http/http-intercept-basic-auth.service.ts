import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthService: BasicAuthService) { }


  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    const username = this.basicAuthService.getAuthenicatedUser();
    const basicAuthString = this.basicAuthService.getAuthenicatedToken();

    if (basicAuthString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthString
        }
      });
    }
    
    return next.handle(request);
  }
}
