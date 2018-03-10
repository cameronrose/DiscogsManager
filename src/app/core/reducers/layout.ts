import { LayoutActionTypes, LayoutActions } from "../actions/layout";

export interface State {
  showSidenav: boolean;
  loading: boolean;
}

const initialState: State = {
  showSidenav: false,
  loading: false
};

export function reducer(
  state: State = initialState,
  action: LayoutActions
): State {
  switch (action.type) {
    case LayoutActionTypes.CloseSidenav:
      return {
        ...state,
        showSidenav: false
      };
    case LayoutActionTypes.OpenSidenav:
      return {
        ...state,
        showSidenav: true
      };
    case LayoutActionTypes.Loading:
    console.log('LOADING');
      return {
        ...state,
        loading: true
      };
    case LayoutActionTypes.LoadingComplete:
    console.log('STOP LOADING');
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
export const isLoading = (state: State) => state.loading;
