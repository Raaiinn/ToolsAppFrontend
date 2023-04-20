import { Component } from '@angular/core';

/**
 * This class represents the abstraction implemented to run ToolsApp
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 *  @param title defines the title given to the app, in this case ToolsApp 
 */
export class AppComponent {
  title = 'ToolsApp';
}
