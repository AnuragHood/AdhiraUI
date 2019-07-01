import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, } from '@angular/forms';
import { DialogControlComponent } from '../dialog-control/dialog-control.component';

import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

import { RegisterService } from '../register.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';







@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent implements OnInit {
  
  
  isLeftVisible: boolean = true;
  response: any;
  hide = true;
  labelPosition = 'after';
  login: Object = {};
  user: Object = {};
  gender = 'male';
  animal: string;
  name: string;
  loginForm: FormGroup;
  signupForm:FormGroup;
  password: FormControl;
  confPassword: FormControl;
  passmsg: boolean;

  
  
  ngOnInit() {
    
    this.loginForm = new FormGroup({

      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      email: new FormControl(null, [Validators.required, Validators.email]),

    });
    this.signupForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
      last_name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required,Validators.pattern('[6-9]\\d{9}')]),
      confPassword: new FormControl(null, [Validators.required]),
     
    });
 
  }
  checkPassSame() {
    
    let pass = this.signupForm.value.password;
    let passConf = this.signupForm.value.confPassword;
    if (pass == passConf) {
      
      console.log("function invoked happy case" + this.signupForm.value.password)
      //return this.passmsg;
    } else {
      this.signupForm.controls['confPassword'].setErrors({ 'passmsg': true });
      console.log("function invoked" + this.signupForm.value.confPassword)
     // return this.passmsg;
    }
    
  }

  changeButtonText() {
    
    this.isLeftVisible = !this.isLeftVisible
    if (this.isLeftVisible) {
      this.resetForm();
      document.getElementById("signup").innerText = "Signup";
    } else {
      this.resetForm();
      document.getElementById("signup").innerText = "Login";
    }
  }

 
  
  onClickSubmitLogin(formdata) {
    this.login["email"] = formdata.email;
    this.login["password"] = formdata.password;
    this.register.login(this.login).subscribe((data) => this.displaydata(data));
  }
  constructor(private register: RegisterService, public dialog: MatDialog) { }
  
  onClickSubmitSignup(formdata) {
    console.log(formdata.gender)
    this.user["email"] = formdata.email;
    this.user["password"] = formdata.password;
    this.user["lastName"] = formdata.last_name;
    this.user["name"] = formdata.name;
    this.user["phone"] = formdata.phone;
    this.user["gender"] = formdata.gender;
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
  
  openDialog(formdata): void {
    const dialogRef = this.dialog.open(DialogControlComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
     this.user["email"] = formdata.email;
    this.user["password"] = formdata.password;
    this.user["lastName"] = formdata.last_name;
    this.user["name"] = formdata.name;
    this.user["phone"] = formdata.phone;
    this.user["gender"] =  this.gender;
    console.log( this.gender);
    localStorage.setItem("user_254521_details",JSON.stringify(this.user))
  }
  forgotPassword(): void {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '250px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });

   

  }
 
  
}
