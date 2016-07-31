/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import { spy } from 'sinon';
import * as actions from '../../app/actions/visibilityFilter';


describe('actions', () => {

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter()).to.deep.equal({ type: actions.SET_VISIBILITY_FILTER });
  });
});
