import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
@Component({
  selector: 'app-auth-tabs',
  templateUrl: './auth-tabs.component.html',
  styleUrls: ['./auth-tabs.component.css']
})
export class AuthTabsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    const el = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(el, {

    });

  }


}
