import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers';

import {SearchResult} from '../../models';
import * as search from '../../actions/releases';

@Component({
  selector: 'dc-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  searchQuery$: Observable<string>;
  searching$: Observable<boolean>;
  searchResults$: Observable<SearchResult[]>;
  error$: Observable<string>;

  constructor(private store: Store<fromRoot.State>) {
    this.searchQuery$ = store.select(fromRoot.getSearchQuery);
    this.searchResults$ = store.select(fromRoot.getSearchResults);
    this.searching$ = store.select(fromRoot.getSearchLoading);
    this.error$ = store.select(fromRoot.getSearchError);
  }

  search(query: string) {
    this.store.dispatch(new search.Search(query));
  }
}
