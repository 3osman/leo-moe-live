import * as types from './action-types';

export function getListSuccess(results) {
  return {
    type: types.SEARCH_SUCCESS,
    results
  };
}

export function searchStart() {
  return {
    type: types.SEARCH_START
  };
}

export function searchFailed(error) {
  return {
    type: types.SEARCH_ERROR,
    error
  };
}
