import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dc-nav-item',
  templateUrl: './nav-item.html',
  styleUrls: ['./nav-item.css']
})
export class NavItemComponent {
  @Input() icon = '';
  @Input() hint = '';
  @Input() routerLink: string | any[] = '/';
  @Output() navigate = new EventEmitter();
}
