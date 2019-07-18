import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { RegisterService } from '../register.service';
import { OtpVerificationComponent } from '../otp-verification/otp-verification.component';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./dialog-control.component.scss']
})
export class DialogControlComponent {
  registerOption = 'email';
  user: object = {};
  userFinal: object = {};
  response: any;
  otp: string;
  id: any;

  constructor(
    public dialogRef: MatDialogRef<DialogControlComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private register: RegisterService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  onNoClick(e): void {
    this.dialogRef.close();
  }

  public save() {
    this.user = JSON.parse(localStorage.getItem('user_254521_details'));
    this.userFinal['registrationMode'] = this.registerOption;
    this.userFinal['email'] = this.user.email;
    this.userFinal['password'] = this.user.password;
    this.userFinal['lastName'] = this.user.lastName ;
    this.userFinal['name'] = this.user.name;
    this.userFinal['phone'] = this.user.phone;
    this.userFinal['gender'] = this.user.gender;

    this.register
      .addUser(this.userFinal)
      .subscribe(data => this.displaydata(data));
  }
  displaydata(data) {
    this.response = data;
    this.alertResponse(this.response);
  }
  alertResponse(response) {
    if (this.registerOption === 'mobile') {
      if (this.response == null || this.response === '0') {
        this.snackBar.open('Mobile/Email already exist.', 'close', {
          duration: 300000,
        });
      } else {
        this.snackBar.open('Check your mobile for otp', 'close', {
          duration: 300000,
        });
        const dialogRef = this.dialog.open(OtpVerificationComponent, {
          width: '250px'
        });
        console.log('response:' + this.response);
        dialogRef.componentInstance.id = this.response;
      }
    } else {
      if (this.response === '0') {
        this.snackBar.open('Mobile/Email already exist.', 'close', {
          duration: 300000,
        });
      } else {
        this.snackBar.open('Check your mail to verify.', 'close', {
          duration: 300000,
        });
      }
    }
  }
}
