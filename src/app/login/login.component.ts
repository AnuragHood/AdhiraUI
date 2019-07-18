import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DialogControlComponent } from '../dialog-control/dialog-control.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { RegisterService } from '../register.service';


import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLeftVisible = true;
  response: any;
  hide = true;
  labelPosition = 'after';
  login: Object = {};
  user: Object = {};
  gender = 'male';
  animal: string;
  name: string;
  loginForm: FormGroup;
  signupForm: FormGroup;
  password: FormControl;
  confPassword: FormControl;
  passmsg: boolean;

  ngOnInit() {
    console.log(this.cookieService.get('rememberMeId'));
    console.log(this.cookieService.get('rememberMePass'));
    this.loginForm = new FormGroup({
      password: new FormControl(this.cookieService.get('rememberMePass'), [
        Validators.required,
        Validators.minLength(8)
      ]),
      email: new FormControl(this.cookieService.get('rememberMeId'), [
        Validators.required,
        Validators.email
      ])
    });
    this.signupForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25)
      ]),
      last_name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('[6-9]\\d{9}')
      ]),
      confPassword: new FormControl(null, [Validators.required])
    });
  }
  checkPassSame() {
    const pass = this.signupForm.value.password;
    const passConf = this.signupForm.value.confPassword;
    if (pass === passConf) {
      console.log(
        'function invoked happy case' + this.signupForm.value.password
      );
    } else {
      this.signupForm.controls.confPassword.setErrors({ passmsg: true });

      console.log('function invoked' + this.signupForm.value.confPassword);
    }
  }

  changeButtonText() {
    this.isLeftVisible = !this.isLeftVisible;
    if (this.isLeftVisible) {
      this.resetForm();
      document.getElementById('signup').innerText = 'Signup';
    } else {
      this.resetForm();
      document.getElementById('signup').innerText = 'Login';
    }
  }

  onClickSubmitLogin(formdata) {
    this.cookieService.delete('rememberMeId');
    this.cookieService.delete('rememberMePass');
    this.login.email = formdata.email;
    this.login.password = formdata.password;
    if (
      (document.getElementById('isRememberMeSelected-input') as any).checked
    ) {
      this.cookieService.set('rememberMeId', formdata.email);
      this.cookieService.set('rememberMePass', formdata.password);
      console.log(this.cookieService.get('rememberMeId'));
      console.log(this.cookieService.get('rememberMePass'));
    }

    this.register.login(this.login).subscribe(data => this.displaydata(data));
  }
  constructor(
    private register: RegisterService,
    public dialog: MatDialog,
    private cookieService: CookieService,
  ) {}

  displaydata(data) {
    this.response = data;
    this.alertResponse(this.response);
  }
  alertResponse(response) {
    alert('Logged-in successfully!!');
  }
  resetForm() {
    (document.getElementById('Login') as HTMLFormElement).reset();
    (document.getElementById('signupForm') as HTMLFormElement).reset();
  }

  openDialog(formdata): void {
    const dialogRef = this.dialog.open(DialogControlComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    this.user.email = formdata.email;
    this.user.password = formdata.password;
    this.user.lastName = formdata.last_name;
    this.user.name = formdata.name;
    this.user.phone = formdata.phone;
    this.user.gender = this.gender;
    localStorage.setItem('user_254521_details', JSON.stringify(this.user));
  }
  forgotPassword(): void {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
