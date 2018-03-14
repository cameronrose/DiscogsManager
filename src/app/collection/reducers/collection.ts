import {
  CollectionActions,
  CollectionActionTypes
} from "../actions/collection";
import * as models from "../models";

export interface State {
  collection: models.Collection;
  id: number | null;
  loading: boolean;
}

const initialState: State = {
  collection: null,
  id: null,
  loading: false
};

export function reducer(
  state = initialState,
  action: CollectionActions
): State {
  switch (action.type) {
    case CollectionActionTypes.Load: {
      return {
        ...state,
        loading: true
      };
    }

    case CollectionActionTypes.LoadComplete: {
      return {
        ...state,
        loading: false,
        collection: action.payload
      };
    }

    case CollectionActionTypes.Add: {
      return{
        ...state,
        loading: true
      };
    }

    case CollectionActionTypes.AddComplete:{
      return{
        ...state,
        loading: false
      };
    }
    
    default: {
      return state;
    }
  }
}

export const getCollection = (state: State) => state.collection;

export const getLoading = (state: State) => state.loading;
