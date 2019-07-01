import { Component,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterService } from '../register.service';
import { OtpVerificationComponent } from '../otp-verification/otp-verification.component';





@Component({
  
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./dialog-control.component.scss'],
})
export class DialogControlComponent{
  registerOption = "email";
   user: Object = {};
   userFinal: Object = {};
   response: any;
   otp: string;
   
  
  

  constructor(
    public dialogRef: MatDialogRef<DialogControlComponent >,
    @Inject(MAT_DIALOG_DATA) public data: any,private register: RegisterService,public dialog: MatDialog) { }

  onNoClick(e): void {
    this.dialogRef.close();
    
  }

  public save() {
    this.user = JSON.parse(localStorage.getItem("user_254521_details"))    
    this.userFinal["registrationMode"] = this.registerOption;
    this.userFinal["email"] =  this.user.email;
    this.userFinal["password"] =  this.user.password;
    this.userFinal["lastName"] =  this.user.last_name;
    this.userFinal["name"] =  this.user.name;
    this.userFinal["phone"] =  this.user.phone;
    this.userFinal["gender"] =  this.user.gender;
   
    
    this.register.addUser(this.userFinal).subscribe((data) => this.displaydata(data));
   
 
 }
 displaydata(data) { this.response = data; this.alertResponse(this.response); }
 alertResponse(response) {
   
     if(this.registerOption == "mobile"){
  
    if(this.response == null || this.response =="0" ){
    alert("Mobile/Email already exist.")
    }
    else{
    alert("Please check your mobile for otp.");
     const dialogRef = this.dialog.open(OtpVerificationComponent, {
      width: '250px',
      //data: { res:this.name },
     
    
    });
     dialogRef.componentInstance.response = this.response;
    }
  
   
  
   }
   else{
   if(this.response == "0"){
   alert("Email already exist.")
   }
   else{
   alert("Please check your mail to complete your registration")
   }
   
   }
  }
  
}
