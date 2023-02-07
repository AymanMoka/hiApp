import { PostService } from './../../services/post.service';
import { ReactiveFormsModule } from '@angular/forms';
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
    NavbarComponent,
    ReactiveFormsModule
  ],
  providers:[PostService]
})
export class StreamsModule { }
