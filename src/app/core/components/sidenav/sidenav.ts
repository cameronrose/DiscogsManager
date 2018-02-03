import { Component, Input } from '@angular/core';

@Component({
  selector: 'dc-sidenav',
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.css']
})
export class SidenavComponent {
  @Input() open = false;
}
