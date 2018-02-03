import { LayoutActionTypes, LayoutActions } from '../actions/layout';

export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

var actionDict = {};

function _closeSideNav() {
  return { showSidenav: false };
}

function _openSidenav() {
  return { showSidenav: true };
}

actionDict[LayoutActionTypes.CloseSidenav] = _closeSideNav;
actionDict[LayoutActionTypes.OpenSidenav] = _openSidenav;

export function reducer(
  state: State = initialState,
  action: LayoutActions
): State {
  if (action.type) {
    actionDict[action.type]();
  }

  return state;
}

export const getShowSidenav = (state: State) => state.showSidenav;
