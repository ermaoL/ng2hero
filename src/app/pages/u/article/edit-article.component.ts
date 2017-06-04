import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'u-edit-article',
    template: `<common-add-article [type]="edit"></common-add-article>`,
    styles: [
      `
        :host{
          width: 100%;
        }
      
      `
    ]
})
export class EditArticleComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
