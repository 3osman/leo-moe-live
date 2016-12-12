import * as types from './action-types';

export function getListSuccess(results) {
  return {
    type: types.SEARCH_SUCCESS,
    results
  };
}

export function searchStart(search) {
  return {
    type: types.SEARCH_START,
    search
  };
}

export function searchFailed(error) {
  return {
    type: types.SEARCH_ERROR,
    error
  };
}
