import searchReducer from './search-reducer';
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

var reducers = combineReducers({
  searchState: searchReducer,
  routing: routerReducer
});

export default reducers;
