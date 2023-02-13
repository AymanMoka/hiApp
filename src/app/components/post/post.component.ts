import { PostService } from './../../services/post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import io from 'socket.io-client';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  socketHost: any;
  socket: any;
  constructor(private postService: PostService) {
    this.socketHost = 'http://localhost:3000';
    this.socket = io(this.socketHost);
  }

  post!: FormGroup;

  ngOnInit(): void {
    this.post = new FormGroup({
      post: new FormControl('', [Validators.required])
    });
  }

  addPost() {
    console.log(this.post.value);
    let value = this.post.value;
    this.postService.addPost(value).subscribe(
      {
        next: (data) => {
          this.socket.emit('reload', {msg:'reload page'});
          console.log(data)
        },
        error: (e) => console.log(e),
      }
    )
  }

}
