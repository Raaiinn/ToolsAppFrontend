import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private cookieService : CookieService) {
    
  }
  searchAllUsers(page: number, size: number, order: string, asc: boolean) : Observable<any>{
    return this.http.get<any>("http://localhost:8081/api/user/paginated?"+`page=${page}&size=${size}&order=${order}&asc=${asc}`, {
                                                                                    headers:{
                                                                                      Authorization: this.cookieService.get("token")
                                                                                    }
                                                                                  });
  }
}
