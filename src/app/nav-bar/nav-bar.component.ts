import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


/**
 * This class represents the definition of the component nav-bar used to display a menu 
 * on the application template
 */


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  isLogged: boolean;
  service: CookieService;
  constructor(private cookieService: CookieService){
    this.service = cookieService;
    if(this.service.get('token')==null){
      this.isLogged = false;
    }else{
      this.isLogged = true;
    }
  }

  ngOnInit(): void {
    this.active();
  }

  ngDoCheck(){
    this.active();
  }

  active():void{
    if(this.service.get('token')==null){
      this.isLogged = false;
    }else{
      this.isLogged = true;
    }
  }

  
}
