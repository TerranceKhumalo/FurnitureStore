import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloBean{
  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root',
})
export class HomeDataService {
  // private homeUrl = 'http://localhost:8080/home';

  constructor(private http: HttpClient) {}

  getHomePage() {
    let basicAuthString = this.createBasicAuthHeader();
    const headers = new HttpHeaders({
      Authorization: basicAuthString,
      responseType: 'text'
    });
    
    return this.http.get<string>('http://localhost:8080/home', {headers});
  }

  createBasicAuthHeader() {
    let username = 'user';
    let password = 'password';
    
    let basicAuthString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthString;
  }
}
