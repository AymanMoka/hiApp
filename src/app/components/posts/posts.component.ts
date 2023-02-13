import { Router } from '@angular/router';
import { Posts } from './../../model/postsModel';
import { User } from './../../model/user';
import { TokenService } from './../../services/token.service';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import io from "socket.io-client";
import * as _ from 'lodash';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  socket:any;
  posts!: Posts[];
  user!: User;

  constructor(private postService: PostService, private tokenService:TokenService , private router:Router) { 
    this.socket = io('http://localhost:3000');
  }

  ngOnInit(): void {
    this.getAllPosts(); 
    this.getUserPayload();
    this.socket.on('refreshPage', () => {
      this.getAllPosts(); // get posts from server on refresh event
    }); // listen for event from socket.io server
   
  }

  getUserPayload() {
    this.user =  this.tokenService.getPayload(); // get user payload from token
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe({ // get all posts
      next: (data) => {
        this.posts = data;  
        console.log(this.posts); 
      },
      error: (err) => { console.log(err); }
    })
  }

  addLike(post: Posts) {
    this.postService.likePost(post).subscribe({ // like post
      next: (data) => { 
        console.log(data);
        this.socket.emit('reload', {}); // emit event to socket.io server
      },
      error: (err) => { console.log(err); }
    })
  }
  timeAgo(time: Date) {
    return moment(time).fromNow(); // return time ago from moment.js
  }

  postLiked(arr: any[], username: string) {
    return _.some(arr, { username: username }); // check if user has liked post
  }

  postComments(post: Posts) {
    this.router.navigate(['post', post._id]); // navigate to post comments
  }
}


