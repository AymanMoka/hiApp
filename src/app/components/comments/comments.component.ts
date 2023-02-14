import { Comment, Posts } from './../../model/postsModel';
import { PostService } from './../../services/post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, AfterViewInit {

  navbarContent!: HTMLInputElement | null;
  commentForm!: FormGroup;
  postId!: string;
  comments!: Comment[];
  post = {} as Posts;
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.params['id']; // get post id from url
    this.navbarContent = document.querySelector('.nav-content'); // get navbar content
    this.formInit(); // initialize comment form
    this.getComments(); // get comments
  }

  addComment() {
    const comment = this.commentForm.value.comment;
    this.postService.addComment(this.postId, comment).subscribe({
      next: (data) => {
        this.commentForm.reset();
        console.log(data);
      },
      error: (err) => { console.log(err) }
    })
  }
  getComments() {
    this.postService.getPostById(this.postId).subscribe({
      next: (data) => {
        if (data) {
          this.comments = data.comments;
          this.post = data;
        }

      },
      error: (err) => { console.log(err) }
    })
  }
  timeAgo(time: Date) {
    return moment(time).fromNow(); // return time ago
  }

  formInit() {
    this.commentForm = new FormGroup({ // create comment form
      comment: new FormControl('', [Validators.required])
    });
  }
  ngAfterViewInit(): void {
    if (this.navbarContent) this.navbarContent.style.display = 'none';
  }



}
