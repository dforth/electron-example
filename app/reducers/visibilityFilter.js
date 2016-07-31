import {SET_VISIBILITY_FILTER } from '../../app/actions/visibilityFilter';

const visibilityFilter = function(state = "SHOW_UNCOMPLETED", action) {

  switch (action.type) {

    case SET_VISIBILITY_FILTER:

      // TODO: validate that new filter is possible filter
      return action.filter

    default:

      return state;
  }
}

export default visibilityFilter;
