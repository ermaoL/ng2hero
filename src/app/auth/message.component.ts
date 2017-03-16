import {Component, OnInit} from '@angular/core';
import {InterceptorService} from './interceptor.service';

@Component({
  moduleId: module.id,
  selector: 'message',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.scss']
})
export class MessageComponent implements OnInit {
  constructor(private _interceptor: InterceptorService) {
  }

  messages = [];

  ngOnInit() {
    this._interceptor.beforeRequest.subscribe(data => {
      if(this.messages.length > 9) {
        this.messages.shift();
      }
      this.messages.push({
        message: data,
        type: 'primary'
      });
    });

    this._interceptor.afterRequest.subscribe(data=> {
      if(this.messages.length > 9) {
        this.messages.shift();
      }
      this.messages.push({
        message: data,
        type: 'primary'
      });
    })
  }

}
