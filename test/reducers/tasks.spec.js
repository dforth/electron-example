import { expect } from 'chai';
import tasks from '../../app/reducers/tasks';
import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK, COMPLETE_ALL } from '../../app/actions/tasks';
import deepFreeze from 'deep-freeze';


describe('reducers', () => {
  describe('tasks', () => {

    it('should handle initial state', () => {

      let action = {};

      let expectedState = [];

      expect(tasks(undefined, action)).to.deep.equal(expectedState);
    });


    it('should handle ADD_TASK when there are no tasks', () => {

      let initialState = [];
      deepFreeze(initialState);

      let action = {
        type: ADD_TASK,
        id: 0,
        name: 'test task'
      };
      deepFreeze(action);

      let expectedState = [{
          id: 0,
          name: 'test task',
          completed: false
      }];

      expect(tasks(initialState, action)).to.deep.equal(expectedState);
    });

    it('should handle ADD_TASK when there are tasks', () => {

      let initialState = [{
          id:0,
          name: 'task one',
          completed: false
      }];
      deepFreeze(initialState);

      let action = {
        type: ADD_TASK,
        id: 1,
        name: 'task two'
      };
      deepFreeze(action);

      let expectedState = [{
          id:0,
          name: 'task one',
          completed: false
        },{
          id: 1,
          name: 'task two',
          completed: false
        }];

      expect(tasks(initialState, action)).to.deep.equal(expectedState);
    });


    it('should handle REMOVE_TASK', () => {

      let initialState = [{
          id:0,
          name: 'task one',
          completed: false
      }];
      deepFreeze(initialState);

      let action = {
        type: REMOVE_TASK,
        id: 0
      };
      deepFreeze(action);

      let expectedState = [];

      expect(tasks(initialState, action)).to.deep.equal(expectedState);
    });

    it('should handle REMOVE_TASK when there are other tasks', () => {

      let initialState = [{
          id:0,
          name: 'task one',
          completed: false
      },{
          id:1,
          name: 'task two',
          completed: false
      }];
      deepFreeze(initialState);

      let action = {
        type: REMOVE_TASK,
        id: 0
      };
      deepFreeze(action);

      let expectedState = [{
          id:1,
          name: 'task two',
          completed: false
      }];

      expect(tasks(initialState, action)).to.deep.equal(expectedState);
    });


    it('should handle REMOVE_TASK with unknown index', () => {

      let initialState = [{
          id:0,
          name: 'task one',
          completed: false
      }];
      deepFreeze(initialState);

      let action = {
        type: REMOVE_TASK,
        id: 100
      };
      deepFreeze(action);

      let expectedState = [{
          id:0,
          name: 'task one',
          completed: false
      }];

      expect(tasks(initialState, action)).to.deep.equal(expectedState);
    });


    it('should hangle TOGGLE_TASK to true', () => {

      let initialState = [{
          id:0,
          name: 'task one',
          completed: false
      }];
      deepFreeze(initialState);

      let action = {
        type: TOGGLE_TASK,
        id: 0
      };
      deepFreeze(action);

      let expectedState = [{
          id:0,
          name: 'task one',
          completed: true
      }];

      expect(tasks(initialState, action)).to.deep.equal(expectedState);
    });

    it('should handle TOGGLE_TASK to false', () => {

      let initialState = [{
          id:0,
          name: 'task one',
          completed: false
      },{
          id:1,
          name: 'task two',
          completed: true
      }];
      deepFreeze(initialState);

      let action = {
        type: TOGGLE_TASK,
        id: 1
      };
      deepFreeze(action);

      let expectedState = [{
          id:0,
          name: 'task one',
          completed: false
      },{
          id:1,
          name: 'task two',
          completed: false
      }];

      expect(tasks(initialState, action)).to.deep.equal(expectedState);
    });

    it('should hangle COMPLETE_ALL', () => {

      let initialState = [{
          id:0,
          name: 'task one',
          completed: false
      },{
          id:0,
          name: 'task one',
          completed: true
      }];
      deepFreeze(initialState);

      let action = {
        type: COMPLETE_ALL
      };
      deepFreeze(action);

      let expectedState = [{
          id:0,
          name: 'task one',
          completed: true
        },{
          id:0,
          name: 'task one',
          completed: true
      }];

      expect(tasks(initialState, action)).to.deep.equal(expectedState);
    });

  });
});
