import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable ,  Scheduler ,  EMPTY as empty ,  of } from 'rxjs';
import { async } from 'rxjs/scheduler/async';

import { DiscogsService } from '../../core/services/discogs.service';
import {
  ReleaseActionTypes,
  ReleaseActions,
  SearchComplete,
  SearchError,
  Search,
} from '../actions/releases';
import * as models from '../models';
import {
  debounceTime,
  map,
  switchMap,
  skip,
  takeUntil,
  catchError,
} from 'rxjs/operators';

import {defaults} from '../../util';

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class SearchEffects {
  @Effect()
  search$: Observable<Action> = this.actions$.pipe(
    ofType<Search>(ReleaseActionTypes.Search),
    debounceTime(300),
    map(action => action.payload),
    switchMap(input => {
      if(input.query.length < 3){
        return empty();
      }

      const nextSearch$ = this.actions$.pipe(
        ofType(ReleaseActionTypes.Search),
        skip(1)
      );
      const searchTerm = input.query.trim();
      const query = encodeURIComponent(searchTerm);

      return this.discogsService
        .search(input)
        .pipe(
          takeUntil(nextSearch$),
          map((search: models.Search) => new SearchComplete(search)),
          catchError(err => of(new SearchError(err)))
        );
    })
  );

  constructor(
    private actions$: Actions,
    private discogsService: DiscogsService
  ) {}
}
