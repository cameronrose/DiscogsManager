import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as models from '../../models';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'dc-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  @Input()
  searchResults: models.SearchResult[];
  @Input()
  pagination: models.Pagination;

  @Output()
  onPageChange = new EventEmitter<PageEvent>();
}
