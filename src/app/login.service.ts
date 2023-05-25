import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

/** This class represents the service used to retrieve the user's data displayed on ToolsApp*/

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /**
   * @constructor is the constructor method for LoginService
   * @param http is the depdency's injection used to handle the http request to and from the microservice of login
   * @param cookieService is the dependecy's injection used to storage the user's token in form of a cookie
   */
  constructor(private http : HttpClient, private cookieService : CookieService) { }

  /**
   * Login method indicates the behavior when the user is trying to log into ToolsApp
   * @param user storage the user indicated in the login form by the user
   * @param password storage the password suministred by the user in the login form
   * @constant headers is used to build the header on a http petition
   * @constant body is usted to build the body in a http pettition
   * @constant params is used to build the params of a http petition where the information suministrated by the user will be located
   * @returns this.http.post compiles the previous parameters, creates and sends a http petition to the microservice indicated  
   */
  login(user : string, password : string) : Observable<any> {
    const headers = new HttpHeaders()
    const body = JSON.stringify({})
    const params = new HttpParams().set('user', user).set('password', password)

    return this.http.post("http://localhost:8082/api/login", body, { params : params });
  }

  /**Method used to modify the token value stored on a cookie 
   * @param token
   * @type string
   * references the string where will be stored the token and stores it into the cookie
  */
  setToken(token : string){
    this.cookieService.set("token", token);
  }
  /**Method used to retrieve the token value stored on a cookie */
  getToken(){
    return this.cookieService.get("token");
  }
}
