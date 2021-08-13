import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
    selector: 'app-dialog-show-error',
    templateUrl: './dialog-show-error.component.html',
    styleUrls: ['./dialog-show-error.component.scss']
})
export class DialogShowErrorComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<DialogShowErrorComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    ngOnInit(): void {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
