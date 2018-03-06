import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as fromSearch from "./search";
import * as fromRelease from "./release";

import * as fromRoot from "../../reducers";

export interface ReleasesState {
  release: fromRelease.State;
  search: fromSearch.State;
}

export interface State extends fromRoot.State {
  releases: ReleasesState;
}

export const reducers = {
  release: fromRelease.reducer,
  search: fromSearch.reducer
};

export const getReleasesState = createFeatureSelector<ReleasesState>(
  "releases"
);

export const getReleaseState = createSelector(
  getReleasesState,
  (state: ReleasesState) => state.release
);

export const getSelectedRelease = createSelector(
  getReleaseState,
  fromRelease.getRelease
);
export const getReleaseLoading = createSelector(
  getReleaseState,
  fromRelease.getLoading
);

export const getSearchState = createSelector(
  getReleasesState,
  (state: ReleasesState) => state.search
);
export const getSearchQuery = createSelector(
  getSearchState,
  fromSearch.getQuery
);
export const getSearchLoading = createSelector(
  getSearchState,
  fromSearch.getLoading
);
export const getSearchError = createSelector(
  getSearchState,
  fromSearch.getError
);

export const getSearchResults = createSelector(
  getSearchState,
  fromSearch.getSearchResults
);

export const getSearchPagination = createSelector(
  getSearchState,
  fromSearch.getPagination
);
