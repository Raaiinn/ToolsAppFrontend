import { Component, OnInit } from '@angular/core';
import { ToolService } from '../tool.service';
import { Tool } from '../tool';
import { CookieService } from 'ngx-cookie-service';


/**
 * This class represents a tool's list that will be displayed on the template 
 * of the component tools.component.html
 */

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})

/**
 * The class implements the OnInit function to display the content as soon as the page is loaded
 */
export class ToolsComponent implements OnInit{

  /** Array of tools that is rendered on the html template */

  tools: Tool[]=[];

  /** Filter attributes initialized on empty strings as they will be referenced when the user tries to filter the tools 
   * @type {string}
  */
  filterName = '';
  filterBrand = '';
  page=0;
  size = 3;
  order='id';
  totalPages: Number[]=[];
  asc = true;
  isFirst = false;
  isLast = false;

  /**
   * @constructor Constructor method of the class Tools
   * @param {ToolService}toolService : Dependency's injection of the service dedicated to retrieve the persisted tools
   */
  constructor(private toolService : ToolService, private cookieService: CookieService) {}

  loadTools():void{
    this.toolService.searchAllTools(this.page, this.size, this.order, this.asc).subscribe(
      data => {
        this.totalPages = new Array(data['totalPages']);
        this.tools = data.content;
        this.isFirst = data.first;
        this.isLast = data.last;
        console.log(data);                        
     });
  }

  rewind():void{
    if(!this.isFirst){
      this.page--;
      this.loadTools();
    }

  }
  forward():void{
    if(!this.isLast){
      this.page++;
      this.loadTools();
    }
  }

  setPage(page : number): void{
    this.page = page;
    this.loadTools();
  }
  logout():void{
    this.cookieService.delete('token', '/', 'localhost', false, 'Lax');
  }

  /**
   * ngOnInit function that loads the data into the component as soon as the page is loaded.
   */
  ngOnInit(): void {
    this.loadTools();
  }  
}
