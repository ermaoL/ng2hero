/**
 * Created by Administrator on 2017/6/19.
 */
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'comment-list',
  templateUrl: 'comment.component.html',
  styleUrls: ['comment.component.scss']
})

export class CommentComponent implements OnInit {

  constructor(private _authService: AuthService) {
  }

  loggedIn: boolean = false;
  user;
  ngOnInit() {
    this.loggedIn = this._authService.loggedIn();

    console.log(this.loggedIn);
    if(this.loggedIn) {
      this.user = this._authService.getUserInfo().user;
    }else{
      this.user = {};
    }
  }
}
