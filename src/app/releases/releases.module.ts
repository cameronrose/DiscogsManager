import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ComponentsModule } from './components';
import { SearchEffects } from './effects/search';

import { SearchPageComponent } from './containers/search-page/search-page.component';

import { MaterialModule } from '../material';
import { CoreModule } from '../core/core.module';

import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    RouterModule.forChild([
      {path: 'find', component: SearchPageComponent},
      {
        path: '', component: SearchPageComponent
      }
    ]),
    StoreModule.forFeature("releases", reducers),
    EffectsModule.forFeature([SearchEffects]),
    CoreModule
  ],
  declarations: [SearchPageComponent]
})
export class ReleasesModule { }
