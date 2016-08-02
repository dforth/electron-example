/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import { spy } from 'sinon';
import * as actions from '../../app/actions/nextId';


describe('actions', () => {

  it('incrementId should create INCREMENT_ID action', () => {
    expect(actions.incrementId()).to.deep.equal({
      type: actions.INCREMENT_ID
    });
  });
});
