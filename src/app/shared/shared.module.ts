import { NgModule } from '@angular/core';
import { DialogShowErrorComponent } from './components/dialog-show-error/dialog-show-error.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DialogOpenBoxComponent } from './components/dialog-open-box/dialog-open-box.component';

@NgModule({
    declarations: [
        DialogShowErrorComponent,
        NavBarComponent,
        DialogOpenBoxComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule
    ],
    exports: [
        DialogShowErrorComponent,
        DialogOpenBoxComponent,
        MatButtonModule,
        MatIconModule,
        NavBarComponent,
        MatToolbarModule
    ],
    entryComponents: [],
    providers: []
})
export class SharedModule {}
