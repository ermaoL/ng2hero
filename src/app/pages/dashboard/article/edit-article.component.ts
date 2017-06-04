import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'edit-article',
    template: `
      <common-add-article [type]="edit"></common-add-article>
    `
})
export class EditArticleComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
