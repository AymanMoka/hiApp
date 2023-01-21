import { AuthService } from './../../services/auth.service';
import { LoginComponent } from './../login/login.component';
import { SignupComponent } from './../signup/signup.component';
import { AuthTabsComponent } from './auth-tabs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from "../spinner/spinner.component";


@NgModule({
    declarations: [
        AuthTabsComponent,
        SignupComponent,
        LoginComponent
    ],
    providers: [
        AuthService
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SpinnerComponent
    ]
})
export class AuthModule { }
