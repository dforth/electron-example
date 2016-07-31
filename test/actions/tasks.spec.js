/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import { spy } from 'sinon';
import * as actions from '../../app/actions/tasks';


describe('actions', () => {

  it('addTask should create ADD_TASK action', () => {
    expect(actions.addTask()).to.deep.equal({ type: actions.ADD_TASK });
  });

  it('removeTask should create REMOVE_TASK action', () => {
    expect(actions.removeTask()).to.deep.equal({ type: actions.REMOVE_TASK });
  });

  it('toggleTask should create TOGGLE_TASK action', () => {
    expect(actions.toggleTask()).to.deep.equal({ type: actions.TOGGLE_TASK });
  });

  it('completeAll should create COMPLETE_ALL action', () => {
    expect(actions.completeAll()).to.deep.equal({ type: actions.COMPLETE_ALL });
  });

});
