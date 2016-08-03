import { SET_VISIBILITY_FILTER } from '../../app/actions/visibilityFilter';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED } from '../../app/actions/visibilityFilter';

const visibilityFilter = function(state = SHOW_ALL, action) {

  switch (action.type) {

    case SET_VISIBILITY_FILTER:

      // TODO: validate that new filter is possible filter
      return action.filter

    default:

      return state;
  }
}

export default visibilityFilter;
