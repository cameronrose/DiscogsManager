import { ReleaseActions, ReleaseActionTypes } from "../actions/releases";
import * as models from "../models";

export interface State {
  release: models.Release;
  id: number | null;
  loading: boolean;
}

const initialState: State = {
  release: null,
  id: null,
  loading: false
};

export function reducer(state = initialState, action: ReleaseActions): State {
  switch (action.type) {
    case ReleaseActionTypes.Load: {
      return {
        ...state,
        loading: true,
        id: action.payload
      };
    }

    case ReleaseActionTypes.LoadComplete: {
      return {
        ...state,
        loading: false,
        release: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getRelease = (state: State) => state.release;

export const getLoading = (state: State) => state.loading;
