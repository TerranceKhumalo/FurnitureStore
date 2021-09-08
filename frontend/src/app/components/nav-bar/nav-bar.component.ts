import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from 'src/app/services/hardcoded-auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isMenuCollapsed = true;

  constructor(private hardcodedAuth: HardcodedAuthService) { }

  ngOnInit(): void {
  }

  isUserLoggedIn(): boolean{
    return this.hardcodedAuth.isUserLoggedIn();
  }

  logout() {
    this.hardcodedAuth.logout();
    this.isMenuCollapsed = true;
  }

}
