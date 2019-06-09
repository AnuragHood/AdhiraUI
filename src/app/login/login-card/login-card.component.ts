import { Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators,FormGroup} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';



export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {
  animal: string;
  name: string;
loginForm;
ngOnInit() {
this.loginForm = new FormGroup({
       
        password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        
    });
  }
 
  
  hide = true;
  onClickSubmit(formdata) {
  alert(formdata.password)
  alert(formdata.email)
}
resetForm(event){
(<HTMLFormElement>document.getElementById("Login")).reset();
}
}
