/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import { spy } from 'sinon';
import * as actions from '../../app/actions/tasks';


describe('actions', () => {

  it('addTask should create ADD_TASK action', () => {
    expect(actions.addTask(0, 'test')).to.deep.equal({
      type: actions.ADD_TASK,
      id: 0,
      name: 'test'
    });
  });

  it('removeTask should create REMOVE_TASK action', () => {
    expect(actions.removeTask(0)).to.deep.equal({
      type: actions.REMOVE_TASK,
      id: 0
    });
  });

  it('toggleTask should create TOGGLE_TASK action', () => {
    expect(actions.toggleTask(0)).to.deep.equal({
      type: actions.TOGGLE_TASK,
      id: 0
    });
  });

  it('completeAll should create COMPLETE_ALL action', () => {
    expect(actions.completeAll()).to.deep.equal({ type: actions.COMPLETE_ALL });
  });

  it('setTasls should create SET_TASKS action', () => {

    const tasks = [{
      id:0,
      name: "test",
      completed: false
    }];

    expect(actions.setTasks(tasks)).to.deep.equal({
      type: actions.SET_TASKS,
      tasks: [{
        id:0,
        name: "test",
        completed: false
      }]
    });
  });

});
