import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';

import { MaterialModule } from '../../material';

const COMPONENTS = [
  SearchComponent,
  SearchResultsComponent,
  SearchResultItemComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class ComponentsModule { }
