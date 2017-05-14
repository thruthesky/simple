import { Component, OnInit } from '@angular/core';
import { App } from './../../services/app';



@Component({
    selector: 'home-page',
    templateUrl: 'home.html',
    styleUrls: ['./home.scss']
})

export class HomePage implements OnInit {



    constructor(
        public app: App
    ) {



    }

    ngOnInit() { }
}
