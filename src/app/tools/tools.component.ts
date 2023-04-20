import { Component, OnInit } from '@angular/core';
import { ToolService } from '../tool.service';
import { Tool } from '../tool';


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

  /**
   * @constructor Constructor method of the class Tools
   * @param {ToolService}toolService : Dependency's injection of the service dedicated to retrieve the persisted tools
   */
  constructor(private toolService : ToolService) {}


  /**
   * ngOnInit function that loads the data into the component as soon as the page is loaded.
   */
  ngOnInit(): void {
    this.toolService.searchAllTools().subscribe(
                      (data: Tool[]) => {
                        console.log(data);
                        this.tools = data
                      });
  }  
}
