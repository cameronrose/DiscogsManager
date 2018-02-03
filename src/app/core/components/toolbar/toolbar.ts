import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dc-toolbar',
  templateUrl: './toolbar.html'
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
}
