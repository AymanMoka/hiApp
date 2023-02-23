import { ReactiveFormsModule } from '@angular/forms';
import { SideComponent } from './../side/side.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { NgxPaginationModule } from 'ngx-pagination'; 

@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    NavbarComponent,
    SideComponent,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class CommentsModule { }
