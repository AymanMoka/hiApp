import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!: FormGroup;

  constructor(private authService: AuthService, private router:Router) {

  }
  ngOnInit(): void {
    this.login = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    })
  }

  loginUser() {
    console.log(this.login.value);
    this.authService.loginUser(this.login.value).subscribe(
      data => {
        this.router.navigate(['/streams']);
      }, err => {
        console.log(err.error.message);
      }
    )
  }

}
