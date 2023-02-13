import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, AfterViewInit {
  
  navbarContent!:HTMLInputElement | null;

  constructor() { }

  ngOnInit(): void {
    this.navbarContent = document.querySelector('.nav-content');
  }

  ngAfterViewInit(): void { 
    if(this.navbarContent) this.navbarContent.style.display = 'none';
   }



}
