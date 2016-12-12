import searchReducer from './search-reducer';
import {combineReducers} from 'redux';

var reducers = combineReducers({
  searchState: searchReducer
});

export default reducers;
