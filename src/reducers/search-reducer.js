import * as types from '../actions/action-types';

const initialState = {
  loading: false,
  error: null,
  results: {},
  search: ""
}

function searchReducer (state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_SUCCESS:
      return Object.assign({}, state, { results: action.results, loading: false, error: null });
    case types.SEARCH_START:
      return Object.assign({}, state, { results: initialState.results , search: action.search, loading: true , error: null});
    case types.SEARCH_ERROR:
      return Object.assign({}, state, { loading: false, search: "", error: action.error });
    default:
      return state;
  }
}

export default searchReducer;
