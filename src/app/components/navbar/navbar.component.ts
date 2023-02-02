import { TokenService } from './../../services/token.service';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as M from 'materialize-css';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit , OnDestroy{

  constructor(private router: Router, private tokenService:TokenService , private renderer:Renderer2) {

  }

  ngOnInit(): void {
    const side = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(side, {
      draggable: true,
      inDuration:900
    });
  }

  logOut() {
    this.tokenService.deleteToken();
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    const el = document.getElementsByClassName('sidenav-overlay')
    this.renderer.removeClass(el[0],'sidenav-overlay')
  }
}
