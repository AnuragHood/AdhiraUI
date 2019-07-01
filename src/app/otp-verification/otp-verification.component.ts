import { Component,Inject,OnInit  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup, } from '@angular/forms';
import { RegisterService } from '../register.service';



@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss']
})
export class OtpVerificationComponent implements OnInit {
otpForm;
responseData;
  constructor(
    public dialogRef: MatDialogRef<OtpVerificationComponent >,
    @Inject(MAT_DIALOG_DATA) public data: any,private register: RegisterService) { }

    ngOnInit() {
    
    this.otpForm = new FormGroup({

      otp: new FormControl(null, [Validators.required, Validators.maxLength(4),Validators.minLength(4)]),
    });
   }
    onNoClick(e): void {
    this.dialogRef.close();
    
    }
    verify(formdata){
    console.log(inputValue+"otp"+formdata.otp);
    var inputValue =(<any>document.getElementsByClassName("otpClass"))[0].id;
    this.register.verify(inputValue,formdata.otp).subscribe((data) => this.displaydata(data));
    this.dialogRef.close();
    }
  
displaydata(data) { this.responseData = data; this.alertResponse(this.responseData); }
  alertResponse(responseData) {
    alert(responseData);
   
  }
}
