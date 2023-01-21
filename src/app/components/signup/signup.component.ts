import { TokenService } from './../../services/token.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loading: boolean = false;
  errMsg!: string;
  signUp!: FormGroup;
  constructor(private authService: AuthService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.signupInit()
  }
  signupInit() {
    this.signUp = new FormGroup({
      'username': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'repeatPassword': new FormControl('', Validators.required),
    })
  }
  signupUser() {
    this.loading = true;
    setTimeout(() => {
      this.authService.createUser(this.signUp.value).subscribe(
        data => {
          this.tokenService.setToken(data?.token)
          this.loading = false;
          // console.log(data);
          this.router.navigate(['/streams']);
        },
        err => {
          this.loading = false;
          if (err.error.message) {
            this.errMsg = err.error.message
          }
        }
      )
    }, 3000);
  }

}
