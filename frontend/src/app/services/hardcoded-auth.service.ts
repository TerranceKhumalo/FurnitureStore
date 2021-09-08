import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  login(username: string, password: string): boolean{
    if(username === 'admin' && password === '123'){
      sessionStorage.setItem('authenticUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('authenticUser');
    return (user !== null);
  }

  logout(): void{
    sessionStorage.removeItem('authenticUser');
  }
}
