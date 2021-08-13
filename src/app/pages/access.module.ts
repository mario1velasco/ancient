import { NgModule } from '@angular/core';
import { AccessRoutingModule } from './access-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { InitialComponent } from './initial/initial.component';

@NgModule({
    declarations: [IndexComponent, ExchangeRatesComponent, InitialComponent],
    imports: [
        AccessRoutingModule,
        SharedModule,
        CommonModule,
        MatCheckboxModule,
        MatSliderModule,
        MatProgressBarModule,
        MatCardModule,
        MatGridListModule,
        SharedModule
    ],
    exports: [],
    entryComponents: [],
    providers: []
})
export class AccessModule {}
