import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ToolsComponent } from "./tools/tools.component";

/**
 * @constant routes
 * @type Routes 
 * Is an array in charge of storage the multiple routes that may be implemented on ToolsApp
 */
const routes : Routes = [
                        {path: 'login', component: LoginComponent},
                        {path: '', component: ToolsComponent}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

/**
 * This class represents the module of the routing process implemented on ToolsApp
 */

export class AppRoutingModule {}
