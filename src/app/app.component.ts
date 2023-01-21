import { Router } from '@angular/router';
import { TokenService } from './services/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  token!: string;
  constructor(private tokenService: TokenService , private router:Router) { }

  title = 'hiApp';
  ngOnInit() {
    this.token = this.tokenService.getToken();
    if (this.token) this.router.navigate(['/streams']);
    else this.router.navigate(['/'])
  }
}
