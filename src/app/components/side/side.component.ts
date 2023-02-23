import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent {

}
