import { Component,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./dialog-control.component.scss'],
})
export class DialogControlComponent{
  registerOption = "email";
 
  
  

  constructor(
    public dialogRef: MatDialogRef<DialogControlComponent >,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

