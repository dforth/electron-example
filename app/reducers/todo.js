import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK, SET_VISIBILITY_FILTER } from '../../app/actions/todo';


const task = function(state, action) {

  switch (action.type) {

    case ADD_TASK:

      return {
        id: action.id,
        name: action.name,
        completed: false
      };

    case TOGGLE_TASK:

      if (state.id !== action.id) {

        return state;

      } else {

        return Object.assign({}, state, {
          completed: !state.completed
        });
      }

    default:

      return state;
  }
};

const visibilityFilter = function(state = "SHOW_UNCOMPLETED", action) {

  switch (action.type) {

    case SET_VISIBILITY_FILTER:

      // TODO: validate that new filter is possible filter
      return action.filter

    default:

      return state;
  }
}

const tasks = function(state = [], action) {

  switch (action.type) {

    case ADD_TASK:

      return [
        ...state,
        task(undefined, action)
      ];

    case TOGGLE_TASK:

     return state.map(t => task(t, action));

    default:

      return state;
  }
}

const todo = function(state = {}, action) {

  return {
    tasks: tasks(state.tasks, action),
    visibility: visibilityFilter(state.visibility, action)
  }
}

export default todo;
