import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import tasks from './tasks';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  tasks,
  visibilityFilter,
  routing
});

export default rootReducer;
