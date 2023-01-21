import { TokenService } from './../../services/token.service';
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
  loading: boolean = false;
  errMsg!: string;

  constructor(private authService: AuthService, private router: Router, private tokenService:TokenService) {

  }
  ngOnInit(): void {
    this.login = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    })
  }

  loginUser() {
    this.loading = true;
    
   setTimeout(() => {
     this.authService.loginUser(this.login.value).subscribe(
       data => {
        //  console.log(data);
         this.tokenService.setToken(data?.token);
         this.loading = false;
         this.router.navigate(['/streams']);
       }, err => {
         this.loading = false;
         if (err.error.message) {
           this.errMsg = err.error.message;
         }
       }
     )
   }, 3000);
  }

}
