import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as fromCollection from "./collection";

import * as fromRoot from "../../reducers";

export interface CollectionState {
  collection: fromCollection.State;
}

export interface State extends fromRoot.State {
  collections: CollectionState;
}

export const reducers = {
  collection: fromCollection.reducer
};

export const getCollectionState = createFeatureSelector<CollectionState>(
  "collection"
);