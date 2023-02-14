import { SideComponent } from './../side/side.component';
import { PostService } from './../../services/post.service';
import { NavbarComponent } from './../navbar/navbar.component';
import { StreamsComponent } from './streams.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamsRoutingModule } from './streams-routing.module';
import { PostComponent } from '../post/post.component';
import { PostsComponent } from '../posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StreamsComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    StreamsRoutingModule,
    NavbarComponent,
    SideComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PostService]
})
export class StreamsModule { }
