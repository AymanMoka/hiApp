import { TokenService } from './../../services/token.service';
import { User } from './../../model/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import io from "socket.io-client";

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  allUsers: User[] = [];
  currentUser!: User;
  socket: any;
  constructor(private userService: UserService, private tokenService: TokenService) {
    this.socket = io('http://localhost:3000');
  }

  ngOnInit() {
    this.currentUser = this.tokenService.getPayload(); // This is the method that calls the getPayload()
    this.getUser(); // This is the method that calls the getUser()
    this.socket.on('refreshPage', () => {
      this.getUser(); // get user from server on refresh event
    }); // listen for event from socket.io server

  }

  getUser() {
    this.userService.getUser(this.currentUser._id).subscribe({
      next: (data) => {
        this.currentUser = data;
      },
      error: (err) => { console.log(err) }
    })
  }

  UnfollowUser(user: User) {
    this.userService.unfollowUser(user._id).subscribe({
      next: (data) => {
        this.socket.emit('reload', {}); // emit event to socket.io server
        console.log(data);
      },
      error: (err) => { console.log(err) }
    })
  }

  isUserFollowed(arr: any[], id: string) {
    const result = _.find(arr, ['followingId._id', id]);
    if (result) return true;
    return false;

  }

}
