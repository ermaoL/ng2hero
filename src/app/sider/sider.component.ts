import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'sider',
    styleUrls: ['sider.component.scss'],
    templateUrl: 'sider.component.html',
    providers: [ ]
})
export class SiderComponent implements OnInit {
    constructor() { }

    loggedIn: boolean = false;
    ngOnInit() {
        
    }

    ngOnChanges(changes: SimpleChanges){
    }
}