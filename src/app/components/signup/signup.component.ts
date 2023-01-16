import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUp!: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.signUp = new FormGroup({
      'username': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'repeatPassword': new FormControl('', Validators.required),
    })
  }
  signupUser() {
    this.authService.createUser(this.signUp.value).subscribe(
      data => {
        console.log(data);
      },
      err => { }
    )
  }

}
