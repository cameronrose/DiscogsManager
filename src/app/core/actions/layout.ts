import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  OpenSidenav = '[Layout] Open Sidenav',
  CloseSidenav = '[Layout] Close Sidenav',
  Loading = '[Layout] Loading',
  LoadingComplete = '[Layout] Loading complete'
}

export class OpenSidenav implements Action {
  readonly type = LayoutActionTypes.OpenSidenav;
}

export class CloseSidenav implements Action {
  readonly type = LayoutActionTypes.CloseSidenav;
}

export class Loading implements Action{
  readonly type = LayoutActionTypes.Loading;
}

export class LoadingComplete implements Action{
  readonly type = LayoutActionTypes.LoadingComplete;
}

export type LayoutActions = OpenSidenav | CloseSidenav | Loading | LoadingComplete;
