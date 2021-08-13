import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OpenBoxInterface } from 'src/app/core/interfaces/open-box.interface';

@Component({
    selector: 'app-dialog-open-box',
    templateUrl: './dialog-open-box.component.html',
    styleUrls: ['./dialog-open-box.component.scss']
})
export class DialogOpenBoxComponent implements OnInit {
    public openBox: OpenBoxInterface;
    constructor(
        public dialogRef: MatDialogRef<DialogOpenBoxComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    ngOnInit(): void {
        this.openBox = this.data.openBox;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
