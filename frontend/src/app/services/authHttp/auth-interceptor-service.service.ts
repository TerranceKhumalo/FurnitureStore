import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorServiceService implements HttpInterceptor{

  constructor(private okta: OktaAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    
    return from(this.handelAccess(req, next));
  }

  private async handelAccess(request: HttpRequest<any>, next: HttpHandler):Promise<HttpEvent<any>>{

    // const securedEndPoint:string = 'http://localhost:8080/api/orders';
    //securedEndPoint.some(url => request.urlWithParams.includes(url))
    //Check if http request is for orders and only orders.      
      const accessToken: string = await this.okta.getAccessToken()!; 
      
      //Add access token to oncoming request
      
        request = request.clone({
          setHeaders: {
            Authorization: 'Bearer ' + accessToken
          }
        });
   
    return next.handle(request).toPromise();
  }
}
