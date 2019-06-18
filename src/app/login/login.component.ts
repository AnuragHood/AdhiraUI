import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { RegisterService } from '../register.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent implements OnInit {
  loginForm;
  signupForm;
  isLeftVisible: boolean = true;
  response: any;

  ngOnInit() {
    this.loginForm = new FormGroup({

      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      email: new FormControl(null, [Validators.required, Validators.email]),

    });
    this.signupForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(25)]),
      last_name: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(25)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      email: new FormControl(null, [Validators.required, Validators.email]),

    });
    
  }
  changeButtonText() {
    
    this.isLeftVisible = !this.isLeftVisible
    if (this.isLeftVisible) {
      console.log(this.isLeftVisible)
      document.getElementById("signup").innerText = "Signup";
    } else {
      console.log("else" + this.isLeftVisible)
      document.getElementById("signup").innerText = "Login";
    }
  }

  hide = true;
  login: Object ={ };
  onClickSubmitLogin(formdata) {
    //alert(formdata.password)
    //alert(formdata.email)
    this.login["email"] = formdata.email;
    this.login["password"] = formdata.password;
    this.register.login(this.login).subscribe((data) => this.displaydata(data));
  }
  constructor(private register: RegisterService) { }
  user: Object = {};
  onClickSubmitSignup(formdata) {
    this.user["email"] = formdata.email;
    this.user["password"] = formdata.password;
    this.user["lastName"] = formdata.last_name;
    this.user["name"] = formdata.name;
    this.register.addUser(this.user).subscribe((data) => this.displaydata(data));
    

  }
  displaydata(data) { this.response = data; this.alertResponse(this.response); }
  alertResponse(response) {
    alert(response);
    this.resetForm();
    this.changeButtonText();
  }
  resetForm() {
    (<HTMLFormElement>document.getElementById("Login")).reset();
    (<HTMLFormElement>document.getElementById("signupForm")).reset();
  }
  
  
  
}
