import { Component, OnInit } from '@angular/core';
import { HomeDataService } from 'src/app/services/homepage/home-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

homeMessage: string = '';

  constructor(private homeService: HomeDataService) { }

  ngOnInit(): void {
    this.homeService.getHomePage().subscribe(
      response =>{
        this.successfulRequest(response)
        console.log(response);
        
      },
      error => {
        this.unsuccessfulRequest(error);
        console.error(error);
      }
    );
  }

  successfulRequest(response: any){
    this.homeMessage = response;
  }
  unsuccessfulRequest(response: any){
    this.homeMessage = response.message;
  }

}
