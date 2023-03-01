import { TokenService } from './../../services/token.service';
import { User } from './../../model/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  allUsers: User[] = [];
  currentUser!: User;

  constructor(private userService: UserService, private tokenService:TokenService) { }

  ngOnInit() {
    this.getAllUsers();  // This is the method that calls the getAllUsers()

    this.currentUser = this.tokenService.getPayload(); // This is the method that calls the getPayload()
    
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
}
