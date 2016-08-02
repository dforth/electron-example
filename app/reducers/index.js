import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import tasks from './tasks';
import visibilityFilter from './visibilityFilter';
import nextId from './nextId';

const rootReducer = combineReducers({
  tasks,
  visibilityFilter,
  nextId,
  routing
});

export default rootReducer;
