import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK, COMPLETE_ALL } from '../../app/actions/tasks';


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

        if(state.completed) {

          return Object.assign({}, state, {
            completed: false
          });

        } else {

          return Object.assign({}, state, {
            completed: true,
            completedOn: (new Date()).getTime()
          });
        }
      }

    case COMPLETE_ALL:

      return {
        id: state.id,
        name: state.name,
        completed: true,
        completedOn: (new Date()).getTime()
      }

    default:

      return state;
  }
};

const tasks = function(state = [], action) {

  switch (action.type) {

    case ADD_TASK:

      return [
        ...state,
        task(undefined, action)
      ];

    case REMOVE_TASK:

      return state.filter(t => {

        return (t.id != action.id);
      });

    case TOGGLE_TASK:

      return state.map(t => task(t, action));

    case COMPLETE_ALL:

      return state.map(t => task(t, action));

    default:

      return state;
  }
}

export default tasks;
