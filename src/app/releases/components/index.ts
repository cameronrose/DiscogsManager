import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';

import {ReleaseComponent} from './release/release.component';

import { MaterialModule } from '../../material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const COMPONENTS = [
  SearchComponent,
  SearchResultsComponent,
  SearchResultItemComponent,
  ReleaseComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFontAwesomeModule
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class ComponentsModule { }
