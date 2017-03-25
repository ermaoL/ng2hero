import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tree',
  templateUrl: 'tree.component.html',
  styleUrls: ['tree.component.scss']
})
export class TreeComponent implements OnInit {
  constructor() {
  }

  @Input() data;

  ngOnInit() {
  }

}
