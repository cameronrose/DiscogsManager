import { ReleaseActions, ReleaseActionTypes } from '../actions/releases';
import * as models from '../models';
import {defaults} from '../../util';

export interface State {
    results: models.SearchResult[];
    pagination: models.Pagination;
    showPagination: boolean;
    loading: boolean;
    error: string;
    query: string;
}

const initialState: State = {
    results: [],
    pagination: defaults.pagination,
    showPagination: false,
    loading: false,
    error: '',
    query: '',
};

export function reducer(state = initialState, action: ReleaseActions): State {
    switch (action.type) {
        case ReleaseActionTypes.Search: {
            const input = action.payload;

            if (input.query === '') {
                return this.initialState;
            }

            return {
                ...state,
                loading: true,
                error: '',
                query: input.query,
            };
        }

        case ReleaseActionTypes.SearchComplete: {            
            return {
                results: action.payload.results,
                pagination: action.payload.pagination,
                showPagination: action.payload.pagination.pages > 1,
                loading: false,
                error: '',
                query: state.query,
            };
        }

        case ReleaseActionTypes.SearchError: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }

        default: {
            return state;
        }
    }
}

export const getSearchResults = (state: State) => state.results;

export const getPagination = (state: State) => state.pagination;

export const showPagination = (state: State) => state.showPagination;

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;

export const getError = (state: State) => state.error;
