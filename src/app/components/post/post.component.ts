import { PostService } from './../../services/post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  constructor(private postService: PostService) {

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
        next: (data) => console.log(data),
        error: (e) => console.log(e),
      }
    )
  }

}
