import { INCREMENT_ID, SET_NEXT_ID } from '../../app/actions/nextId';

const nextId = function(state = 0, action) {

  switch (action.type) {

    case INCREMENT_ID:

      return state + 1;

    case SET_NEXT_ID:

      return action.value;
      
    default:

      return state;
  }
}

export default nextId;
