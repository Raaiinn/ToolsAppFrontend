/**
 * @author Brayan Carrillo
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { ToolsComponent } from './tools/tools.component';
import { FilterByNamePipe } from './filters/filter-by-name.pipe';
import { FilterByBrandPipe } from './filters/filter-by-brand.pipe';
import { CookieService } from 'ngx-cookie-service';
import { UsersComponent } from './users/users.component';

/**This module stores all the services, classes, components or functionalities implemented on ToolsApp
 * @param declarations is an array where all the declarations used in the app are stored
 * @param imports is an array used to indicate the Modules implemented from the Angular framework
 * @param providers is an array used to indicate the external providers of modules implemented on ToolsApp
*/

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    ToolsComponent,
    FilterByNamePipe,
    FilterByBrandPipe,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
