import { expect } from 'chai';
import nextId from '../../app/reducers/nextId';
import { INCREMENT_ID, SET_NEXT_ID } from '../../app/actions/nextId';

import deepFreeze from 'deep-freeze';


describe('reducers', () => {
  describe('nextId', () => {


    it('should handle INCREMENT_ID', () => {

      let initialState = 0;
      deepFreeze(initialState);

      let action = {
        type: INCREMENT_ID
      };
      deepFreeze(action);

      let expectedState = 1;

      expect(nextId(initialState, action)).to.equal(expectedState);
    });

    it('should handle INCREMENT_ID', () => {

      let initialState = 5;
      deepFreeze(initialState);

      let action = {
        type: INCREMENT_ID
      };
      deepFreeze(action);

      let expectedState = 6;

      expect(nextId(initialState, action)).to.equal(expectedState);
    });

    it('should handle SET_NEXT_ID', () => {

      let initialState = 5;
      deepFreeze(initialState);

      let action = {
        type: SET_NEXT_ID,
        value: 8
      }
      deepFreeze(action);

      let expectedState = 8

      expect(nextId(initialState, action)).to.equal(expectedState);

    });

  });
});
