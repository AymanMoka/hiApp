import { SideComponent } from './../side/side.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowersRoutingModule } from './followers-routing.module';
import { FollowersComponent } from './followers.component';


@NgModule({
  declarations: [
    FollowersComponent
  ],
  imports: [
    CommonModule,
    FollowersRoutingModule,
    NavbarComponent,
    SideComponent
  ]
})
export class FollowersModule { }
