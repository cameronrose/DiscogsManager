import { Injectable, InjectionToken, Optional, Inject } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Scheduler } from "rxjs/Scheduler";
import { async } from "rxjs/scheduler/async";
import { empty } from "rxjs/observable/empty";
import { of } from "rxjs/observable/of";

import { DiscogsService } from "../../core/services/discogs.service";
import {
  CollectionActionTypes,
  Load,
  LoadComplete,
  Add,
  AddComplete
} from "../actions/collection";
import { Loading, LoadingComplete } from "../../core/actions/layout";

import * as models from "../../core/models";
import { debounceTime, map, switchMap, skip, takeUntil } from "rxjs/operators";

@Injectable()
export class CollectionEffects {
  @Effect()
  get$: Observable<Action> = this.actions$.pipe(
    ofType<Load>(CollectionActionTypes.Load),
    debounceTime(300),
    map(action => action.payload),
    switchMap(user => {
      return this.discogsService
        .collection(user)
        .pipe(
          map((release: models.CollectionRelease) => new LoadComplete(release))
        );
    })
  );
  @Effect()
  add$: Observable<Action> = this.actions$.pipe(
    ofType<Add>(CollectionActionTypes.Add),
    map(action => action.payload),
    switchMap(addInfo => {
      return this.discogsService
        .addToCollection(addInfo.user, addInfo.release_id)
        .pipe(map((result: any) => new AddComplete(result)));
    })
  );

  constructor(
    private actions$: Actions,
    private discogsService: DiscogsService
  ) {}
}
