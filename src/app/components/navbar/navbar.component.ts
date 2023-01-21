import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as M from 'materialize-css';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor() {

  }

  ngOnInit(): void {
    const side = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(side, {
      draggable: true,
      inDuration:900
     
    });
  }

  logOut() {
  
  }
}
