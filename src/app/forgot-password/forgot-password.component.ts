import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { RegisterService } from '../register.service';
import { OtpVerificationComponent } from '../otp-verification/otp-verification.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassForm: FormGroup;
  responseData: any;
  id: any;
  errors: any;

  ngOnInit() {
    this.forgotPassForm = new FormGroup({
      inquire: new FormControl(null, [Validators.required])
    });
  }
  constructor(
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private register: RegisterService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  inquire(formdata) {
    console.log('inquire' + formdata.inquire);
    this.register.inquire(formdata.inquire).subscribe(
      data => {
        this.displaydata(data);
      },
      error => {
        this.errors = error;
      }
    );
  }

  displaydata(data) {
    this.responseData = data;
    this.alertResponse(this.responseData);
  }
  alertResponse(responseData) {
    if (responseData === null) {
      this.snackBar.open(
        'Account not found!! Please try searching for your email, phone number or username again.',
        'close',
        {
          duration: 300000
        }
      );
    }
  }
}
