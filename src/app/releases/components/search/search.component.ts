import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Search } from '../../models';

@Component({
  selector: 'dc-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  @Input() query: string = '';
  @Input() searching: boolean = false;
  @Input() error: string = '';
  @Output() onSearch = new EventEmitter<string>();
}
