import { Component, OnInit } from '@angular/core';
import { BoxInterface } from 'src/app/core/interfaces/box.interface';
import { BoxService } from 'src/app/core/services/box.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogShowErrorComponent } from 'src/app/shared/components/dialog-show-error/dialog-show-error.component';
import { OpenBoxInterface } from 'src/app/core/interfaces/open-box.interface';
import { DialogOpenBoxComponent } from 'src/app/shared/components/dialog-open-box/dialog-open-box.component';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    // ------------------------------------------------------------
    // VARIABLES
    // ------------------------------------------------------------
    public boxes: BoxInterface[];
    public boxOpen: OpenBoxInterface;
    public error: string;
    public breakpoint: number;

    // ------------------------------------------------------------
    // CONSTRUCTOR
    // ------------------------------------------------------------
    constructor(private boxService: BoxService, public dialog: MatDialog) {}

    // ------------------------------------------------------------
    // LIFECYCLE HOOKS
    // ------------------------------------------------------------
    ngOnInit() {
        this.getBoxes();
        this.breakpoint = this.setNumberBoxesRow(window.innerWidth);
    }

    ngOnDestroy() {
        this.boxService.unsubscribe();
    }

    // ------------------------------------------------------------
    // EVENTS
    // ------------------------------------------------------------
    onResize(event) {
        this.breakpoint = this.setNumberBoxesRow(event.target.innerWidth);
    }

    // ------------------------------------------------------------
    // PUBLIC METHODS
    // ------------------------------------------------------------
    getBoxes(): void {
        const params = { free: true, purchasable: true, openable: true };
        this.boxService.getBoxes(params).subscribe((data: BoxInterface[]) => {
            console.log('getBoxes ALL OK');
            console.log(data);
            this.boxes = data;
        });
    }

    openBox(id: string): void {
        this.boxService.openBox(id).subscribe(
            (response: OpenBoxInterface) => {
                console.log('openBox ALL OK');
                console.log(response);
                this.boxOpen = response;
                this.openBoxOpenDialog(this.boxOpen);
            },
            (err) => {
                console.log(err);
                this.openErrorDialog(err);
            }
        );
    }

    openErrorDialog(error: string): void {
        const dialogRef = this.dialog.open(DialogShowErrorComponent, {
            width: '250px',
            data: { error }
        });
    }

    openBoxOpenDialog(openBox: OpenBoxInterface): void {
        const dialogRef = this.dialog.open(DialogOpenBoxComponent, {
            width: '250px',
            data: { openBox }
        });
    }

    setNumberBoxesRow(width): number {
        if (width > 1200) {
            return 3;
        }
        if (width > 800 && width <= 1200) {
            return 2;
        } else {
            return 1;
        }
    }
}
