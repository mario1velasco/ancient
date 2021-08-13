import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { IndexComponent } from './index/index.component';
import { InitialComponent } from './initial/initial.component';

const routes: Routes = [
    {
        path: '',
        component: InitialComponent
    },
    {
        path: 'index',
        component: IndexComponent
    },
    // You need change the uri on graphql.module
    {
        path: 'exchange',
        component: ExchangeRatesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccessRoutingModule {}
