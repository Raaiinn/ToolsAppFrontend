import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/** This class represents the service used to retrieve the tool's data displayed on ToolsApp*/

@Injectable({
  providedIn: 'root'
})
export class ToolService {

   /**
   * @constructor is the constructor method for LoginService
   * @param http is the depdency's injection used to handle the http request to and from the microservice of tools
   * @private
   */
  constructor(private http: HttpClient) { }

  /**
   * Method searchAllTools is used to communicate with the microservice in charge of handling the persistency of Tools
   * @returns a http petition to retrieve all the data persisted of Tools with a header built-in where the authorization token is indicated
   */
  searchAllTools(page: number, size: number, order: string, asc: boolean) : Observable<any>{
    return this.http.get<any>("http://localhost:8080/api/data/tool/paginated?"+`page=${page}&size=${size}&order=${order}&asc=${asc}`, {
                                                                                    headers:{
                                                                                      Authorization: "" 
                                                                                    }
                                                                                  });
  }
}
