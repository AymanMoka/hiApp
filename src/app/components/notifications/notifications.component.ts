import { TokenService } from './../../services/token.service';
import { User } from './../../model/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import io from "socket.io-client";
import * as  moment from 'moment';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  currentUser!: User;
  socket: any;
  constructor(private userService: UserService, private tokenService: TokenService) { 
    this.socket = io('http://localhost:3000');
  }
  ngOnInit() {  
    this.currentUser = this.tokenService.getPayload(); // This is the method that calls the getPayload()
    this.getUser(); // This is the method that calls the getUser()
  }

  getUser() {
    this.userService.getUser(this.currentUser._id).subscribe({
      next: (data) => {
        console.log(data);
        this.currentUser = data;
      },
      error: (err) => { console.log(err) }
    })
  }

  timeAgo(time: string) {
    return moment(time).fromNow();
  }

}
