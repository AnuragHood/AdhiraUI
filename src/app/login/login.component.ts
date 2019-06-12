import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  signupForm;
  isLeftVisible: boolean = true;

  ngOnInit() {
    this.loginForm = new FormGroup({

      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      email: new FormControl(null, [Validators.required, Validators.email]),

    });
    this.signupForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(25)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      email: new FormControl(null, [Validators.required, Validators.email]),

    });
    
  }
  changeButtonText(event) {
    
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
  onClickSubmitLogin(formdata) {
    alert(formdata.password)
    alert(formdata.email)
  }
  onClickSubmitSignup(formdata) {
    alert(formdata.password)
    alert(formdata.email)
  }
  resetForm(event) {
    (<HTMLFormElement>document.getElementById("Login")).reset();
    (<HTMLFormElement>document.getElementById("signupForm")).reset();
  }
  
  
  
}
