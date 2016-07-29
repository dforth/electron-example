import { expect } from 'chai';
import todo from '../../app/reducers/todo';
import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK, SET_VISIBILITY_FILTER } from '../../app/actions/todo';

import deepFreeze from 'deep-freeze';


describe('reducers', () => {
  describe('todo', () => {


    it('should handle initial state', () => {

      let action = {};

      let expectedState = {
        tasks: [],
        visibility: 'SHOW_UNCOMPLETED'
      };

      expect(todo(undefined, action)).to.deep.equal(expectedState);
    });


    it('should handle ADD_TASK when there are no tasks', () => {

      let initialState = {
        tasks: [],
        visibility: 'SHOW_UNCOMPLETED'
      };

      deepFreeze(initialState);

      let action = {
        type: ADD_TASK,
        id: 0,
        name: 'test task'
      }

      deepFreeze(action);

      let expectedState = {
        tasks: [{
          id: 0,
          name: 'test task',
          completed: false
        }],
        visibility: 'SHOW_UNCOMPLETED'
      };

      expect(todo(initialState, action)).to.deep.equal(expectedState);
    });

    it('should handle ADD_TASK when there are tasks', () => {

      let initialState = {
        tasks: [{
          id:0,
          name: 'task one',
          completed: false
        }],
        visibility: 'SHOW_UNCOMPLETED'
      };

      deepFreeze(initialState);

      let action = {
        type: ADD_TASK,
        id: 1,
        name: 'task two'
      }

      deepFreeze(action);

      let expectedState = {
        tasks: [{
          id:0,
          name: 'task one',
          completed: false
        },{
          id: 1,
          name: 'task two',
          completed: false
        }],
        visibility: 'SHOW_UNCOMPLETED'
      };

      expect(todo(initialState, action)).to.deep.equal(expectedState);
    });


    it('should handle REMOVE_TASK', () => {

      let initialState = {
        tasks: [{
          id:0,
          name: 'task one',
          completed: false
        }],
        visibility: 'SHOW_UNCOMPLETED'
      };

      deepFreeze(initialState);

      let action = {
        type: REMOVE_TASK,
        id: 0
      }

      deepFreeze(action);

      let expectedState = {
        tasks: [],
        visibility: 'SHOW_UNCOMPLETED'
      };

      expect(todo(initialState, action)).to.deep.equal(expectedState);
    });


    it('should handle REMOVE_TASK with unknown index', () => {

      let initialState = {
        tasks: [{
          id:0,
          name: 'task one',
          completed: false
        }],
        visibility: 'SHOW_UNCOMPLETED'
      };

      deepFreeze(initialState);

      let action = {
        type: REMOVE_TASK,
        id: 100
      }

      deepFreeze(action);

      let expectedState = {
        tasks: [{
          id:0,
          name: 'task one',
          completed: false
        }],
        visibility: 'SHOW_UNCOMPLETED'
      };

      expect(todo(initialState, action)).to.deep.equal(expectedState);
    });


    it('should hangle TOGGLE_TASK to true', () => {

      let initialState = {
        tasks: [{
          id:0,
          name: 'task one',
          completed: false
        }],
        visibility: 'SHOW_UNCOMPLETED'
      };

      deepFreeze(initialState);

      let action = {
        type: TOGGLE_TASK,
        id: 0
      }

      deepFreeze(action);

      let expectedState = {
        tasks: [{
          id:0,
          name: 'task one',
          completed: true
        }],
        visibility: 'SHOW_UNCOMPLETED'
      };

      expect(todo(initialState, action)).to.deep.equal(expectedState);
    });

    it('should hangle TOGGLE_TASK to false', () => {

      let initialState = {
        tasks: [{
          id:0,
          name: 'task one',
          completed: false
        },
        {
          id:1,
          name: 'task two',
          completed: true
        }],
        visibility: 'SHOW_UNCOMPLETED'
      };

      deepFreeze(initialState);

      let action = {
        type: TOGGLE_TASK,
        id: 1
      }

      deepFreeze(action);

      let expectedState = {
        tasks: [{
          id:0,
          name: 'task one',
          completed: false
        },
        {
          id:1,
          name: 'task two',
          completed: false
        }],
        visibility: 'SHOW_UNCOMPLETED'
      };

      expect(todo(initialState, action)).to.deep.equal(expectedState);
    });

    it('should handle SET_VISIBILITY_FILTER to SHOW_ALL', () => {

      let initialState = {
        tasks: [],
        visibility: 'SHOW_UNCOMPLETED'
      };

      deepFreeze(initialState);

      let action = {
        type: SET_VISIBILITY_FILTER,
        filter: 'SHOW_ALL'
      }

      deepFreeze(action);

      let expectedState = {
        tasks: [],
        visibility: 'SHOW_ALL'
      };

      expect(todo(initialState, action)).to.deep.equal(expectedState);
    });


    it('should handle SET_VISIBILITY_FILTER to SHOW_COMPLETED', () => {

      let initialState = {
        tasks: [],
        visibility: 'SHOW_ALL'
      };

      deepFreeze(initialState);

      let action = {
        type: SET_VISIBILITY_FILTER,
        filter: 'SHOW_COMPLETED'
      }

      deepFreeze(action);

      let expectedState = {
        tasks: [],
        visibility: 'SHOW_COMPLETED'
      };

      expect(todo(initialState, action)).to.deep.equal(expectedState);
    });


    it('should handle SET_VISIBILITY_FILTER to SHOW_UNCOMPLETED', () => {

      let initialState = {
        tasks: [],
        visibility: 'SHOW_ALL'
      };

      deepFreeze(initialState);

      let action = {
        type: SET_VISIBILITY_FILTER,
        filter: 'SHOW_UNCOMPLETED'
      }

      deepFreeze(action);

      let expectedState = {
        tasks: [],
        visibility: 'SHOW_UNCOMPLETED'
      };

      expect(todo(initialState, action)).to.deep.equal(expectedState);
    });
  });
});
