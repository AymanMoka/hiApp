import { TokenService } from './../../services/token.service';
import { User } from './../../model/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import io from "socket.io-client";
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  allUsers: User[] = [];
  currentUser!: User; 
  socket: any;
  constructor(private userService: UserService, private tokenService: TokenService) {
    this.socket = io('http://localhost:3000');
   }

  ngOnInit() {
    this.getAllUsers();  // This is the method that calls the getAllUsers()

    this.currentUser = this.tokenService.getPayload(); // This is the method that calls the getPayload()

    this.getUser(); // This is the method that calls the getUser()

    this.socket.on('refreshPage', () => {
      this.getAllUsers(); // get users from server on refresh event
      this.getUser(); // get user from server on refresh event
    }); // listen for event from socket.io server
    
  }

  getAllUsers() { 
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        _.remove(data, { username: this.currentUser.username });
        this.allUsers = data;
      },
      error: (err) => { console.log(err) }
    })
  }

  getUser() {
    this.userService.getUser(this.currentUser._id).subscribe({
      next: (data) => {
        this.currentUser = data;
      },
      error: (err) => { console.log(err) }
    })
  }
  
  followUser(user:User) {
    this.userService.followUser(user._id).subscribe({
      next: (data) => {
        console.log(data);
        this.socket.emit('reload', {}); // emit event to socket.io server
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
