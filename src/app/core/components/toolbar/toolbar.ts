import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dc-toolbar',
  templateUrl: './toolbar.html'
})
export class ToolbarComponent {
  @Input() loading: boolean;
  @Input() color: string = "#fff";
  
  @Output() openMenu = new EventEmitter();  
}
