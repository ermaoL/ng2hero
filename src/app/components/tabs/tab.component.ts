import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tab',
    templateUrl: 'tab.component.html'
})
export class TabComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    @Input() active = false;
    @Input("tabTitle") title: string;
}
