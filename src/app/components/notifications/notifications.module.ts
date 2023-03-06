import { SideComponent } from './../side/side.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';


@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    NavbarComponent,
    SideComponent
  ]
})
export class NotificationsModule { }
