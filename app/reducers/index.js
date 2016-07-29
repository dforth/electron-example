import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import todo from './todo';

const rootReducer = combineReducers({
  counter,
  todo,
  routing
});

export default rootReducer;
