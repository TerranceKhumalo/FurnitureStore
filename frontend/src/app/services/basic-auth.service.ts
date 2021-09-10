import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constents';

export const TOKEN: string = 'token';
export const AUTHENTIC_USER: string = 'authenticUser';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http: HttpClient) { }


  executeBasicAuth(username: string, password: string) {

    let basicAuthString = 'Basic ' + window.btoa(username + ':' + password);
    const headers = new HttpHeaders({
      Authorization: basicAuthString,
      responseType: 'text'
    });
    
    return this.http.get<string>(`${API_URL}/basicauth`, {headers})
      .pipe(map(
        data=>{
          sessionStorage.setItem(AUTHENTIC_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthString);
          return data;
        }
      ));
  }

  getAuthenicatedUser(){
    return sessionStorage.getItem(AUTHENTIC_USER);
  }
  getAuthenicatedToken(){
    if(this.getAuthenicatedUser()){
      return sessionStorage.getItem(TOKEN);
    }
    return null;
  }

  isUserLoggedIn(): boolean {
    let user = this.getAuthenicatedUser();
    return (user !== null);
  }

  logout(): void{
    sessionStorage.removeItem(AUTHENTIC_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
