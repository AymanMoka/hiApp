import { SideComponent } from './../side/side.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { StreamsComponent } from './streams.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamsRoutingModule } from './streams-routing.module';
import { PostComponent } from '../post/post.component';
import { PostsComponent } from '../posts/posts.component';


@NgModule({
  declarations: [
    StreamsComponent,
    SideComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    StreamsRoutingModule,
    NavbarComponent
  ]
})
export class StreamsModule { }
