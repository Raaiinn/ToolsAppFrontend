import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

/** This class represents the abstraction of the login process in ToolsApp */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /**The attribute checkoutForm is used to group the arguments inside the login form and secure the binding between the template and the component
   * @argument username is initializated as an empty string and therefore will be overriden by the data in the form
   * @argument password is initializated as an empty string and therefore will be overriden by the data in the form
   */
  checkoutForm = this.formBuilder.group({
    username : '',
    password : ''
  });

  /**
   * @constructor Constructor method of the class Tools
   * @param {LoginService}loginService : Dependency's injection of the service dedicated to retrieve the persisted user's data
   * @param {FormBuilder}formBuilder : Dependency's injection of the form's builder dedicated to retrieve the data being written on a form
   * @param {Router}router : Dependency's injection of the class used to navigate through ToolsApp
   */
  constructor(private loginService: LoginService, private formBuilder : FormBuilder, public router : Router){}

  /**
   * onSubmit function is used to writte the data in the form after being submitted to a token stored on a cookie using the loginService injection
   */
  onSubmit() : void {
    let userParam : string;
    let passParam : string;
    userParam = ''+this.checkoutForm.value.username;
    passParam = ''+this.checkoutForm.value.password;
    console.log('FormValue: ', this.checkoutForm.value);
    console.log('Username: ', this.checkoutForm.value.password);
    this.loginService.login(userParam, passParam).subscribe(
      data => {
        console.log(data);
        this.loginService.setToken(data.token);
        this.router.navigateByUrl('/')
      });
    this.checkoutForm.reset();
  }
}
