import { Action } from "@ngrx/store";
import * as models from "../models";

export enum CollectionActionTypes {
  Load = "[Collection] Load",
  Select = "[Collection] Select",
  LoadComplete = "[Collection] Load complete",
  Add = "[Collection] Add",
  AddComplete = "[Collection] Add complete"
}

export class Load implements Action {
  readonly type = CollectionActionTypes.Load;

  constructor(public payload: string) {}
}

export class LoadComplete implements Action {
  readonly type = CollectionActionTypes.LoadComplete;

  constructor(public payload: models.Collection) {}
}

export class Select implements Action {
  readonly type = CollectionActionTypes.Select;

  constructor(public payload: string) {}
}

export class Add implements Action{
  readonly type = CollectionActionTypes.Add;

  constructor(public payload: models.Add){}
}

export class AddComplete implements Action{
  readonly type = CollectionActionTypes.AddComplete;

  constructor(public payload: any){}
}

export type CollectionActions =
  | Load
  | LoadComplete
  | Select
  | Add
  | AddComplete;
