import { Action } from '@ngrx/store';
import * as models from '../models';

export enum ReleaseActionTypes {
  Search = '[Release] Search',
  SearchComplete = '[Release] Search Complete',
  SearchError = '[Release] Search Error',
  Load = '[Release] Load',
  Select = '[Release] Select',
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class Search implements Action {
  readonly type = ReleaseActionTypes.Search;

  constructor(public payload: string) {}
}

export class SearchComplete implements Action {
  readonly type = ReleaseActionTypes.SearchComplete;

  constructor(public payload: models.Search) {}
}

export class SearchError implements Action {
  readonly type = ReleaseActionTypes.SearchError;

  constructor(public payload: string) {}
}

export class Load implements Action {
  readonly type = ReleaseActionTypes.Load;

  constructor(public payload: Search) {}
}

export class Select implements Action {
  readonly type = ReleaseActionTypes.Select;

  constructor(public payload: string) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ReleaseActions = Search | SearchComplete | SearchError | Load | Select;
