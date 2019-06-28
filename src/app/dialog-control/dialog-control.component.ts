import { Component,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterService } from '../register.service';




export class DialogData {
  registerOption: string;
 
}
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
  
  

  constructor(
    public dialogRef: MatDialogRef<DialogControlComponent >,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private register: RegisterService) { }

  onNoClick(e): void {
    this.dialogRef.close();
    
  }

  public save() {
   this.user = JSON.parse(localStorage.getItem("user"))
  // this.user =JSON.stringify(this.user)
    this.userFinal["registrationMode"] = this.registerOption;
    this.userFinal["email"] =  this.user.email;
    this.userFinal["password"] =  this.user.password;
    this.userFinal["lastName"] =  this.user.last_name;
    this.userFinal["name"] =  this.user.name;
    this.userFinal["phone"] =  this.user.phone;
    this.userFinal["gender"] =  this.user.gender;
   console.log(typeof this.registerOption+""+JSON.stringify(this.userFinal))
   this.register.addUser(this.user).subscribe((data) => this.displaydata(data));
 
 }
 displaydata(data) { this.response = data; this.alertResponse(this.response); }
}

