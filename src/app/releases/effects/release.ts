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
  ReleaseActionTypes,
  ReleaseActions,
  Load,
  LoadComplete
} from "../actions/releases";
import { Loading, LoadingComplete } from "../../core/actions/layout";

import * as models from "../models";
import { debounceTime, map, switchMap, skip, takeUntil } from "rxjs/operators";

@Injectable()
export class ReleaseEffects {
  @Effect()
  get$: Observable<Action> = this.actions$.pipe(
    ofType<Load>(ReleaseActionTypes.Load),
    debounceTime(300),
    map(action => action.payload),
    switchMap(input => {
      return this.discogsService.releaseDetail(input).pipe(
        map((release: models.Release) => new LoadComplete(release))
      );
    })
  );
  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType<Load>(ReleaseActionTypes.Load),
    map(action => new Loading())
  )
  @Effect()
  loaded$: Observable<Action> = this.actions$.pipe(
    ofType<LoadComplete>(ReleaseActionTypes.LoadComplete),
    map(action => new LoadingComplete())
  );

  constructor(
    private actions$: Actions,
    private discogsService: DiscogsService
  ) {}
}
