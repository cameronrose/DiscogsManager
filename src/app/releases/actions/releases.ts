import { Action } from "@ngrx/store";
import * as models from "../models";

export enum ReleaseActionTypes {
  Search = "[Release] Search",
  SearchComplete = "[Release] Search Complete",
  SearchError = "[Release] Search Error",
  Load = "[Release] Load",
  Select = "[Release] Select",
  LoadComplete = "[Release] Load complete"
}

export class Search implements Action {
  readonly type = ReleaseActionTypes.Search;

  constructor(public payload: models.SearchInput) {}
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

  constructor(public payload: number) {}
}

export class LoadComplete implements Action {
  readonly type = ReleaseActionTypes.LoadComplete;

  constructor(public payload: models.Release) {}
}

export class Select implements Action {
  readonly type = ReleaseActionTypes.Select;

  constructor(public payload: string) {}
}

export type ReleaseActions =
  | Search
  | SearchComplete
  | SearchError
  | Load
  | LoadComplete
  | Select;
