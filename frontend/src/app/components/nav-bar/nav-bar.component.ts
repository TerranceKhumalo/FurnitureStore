import { Component, OnInit } from '@angular/core';
import { BasicAuthService } from 'src/app/services/basic-auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isMenuCollapsed = true;

  constructor(private basicAuth: BasicAuthService) { }

  ngOnInit(): void {
  }

  isUserLoggedIn(): boolean{
    return this.basicAuth.isUserLoggedIn();
  }

  logout() {
    this.basicAuth.logout();
    this.isMenuCollapsed = true;
  }

}
