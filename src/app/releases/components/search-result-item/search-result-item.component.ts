import { Component, Input } from '@angular/core';
import { SearchResult } from '../../models';

@Component({
  selector: 'dc-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.css']
})
export class SearchResultItemComponent {
  @Input()
  item: SearchResult;
}
