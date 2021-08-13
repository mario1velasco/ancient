import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-initial',
    templateUrl: './initial.component.html',
    styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {
    constructor(@Inject(DOCUMENT) private document: Document) {}

    ngOnInit(): void {}

    goToSteam() {
        this.document.location.href =
            'https://api-staging.csgoroll.com/auth/steam?redirectUri=http://localhost:4200/index';
    }
}
