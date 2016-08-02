import { expect } from 'chai';
import visibilityFilter from '../../app/reducers/visibilityFilter';
import { SET_VISIBILITY_FILTER } from '../../app/actions/visibilityFilter';

import { SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED } from '../../app/actions/visibilityFilter';

import deepFreeze from 'deep-freeze';


describe('reducers', () => {
  describe('visibilityFilter', () => {


    it('should handle SET_VISIBILITY_FILTER to SHOW_ALL', () => {

      let initialState = SHOW_UNCOMPLETED;
      deepFreeze(initialState);

      let action = {
        type: SET_VISIBILITY_FILTER,
        filter: SHOW_ALL
      };
      deepFreeze(action);

      let expectedState = SHOW_ALL;

      expect(visibilityFilter(initialState, action)).to.deep.equal(expectedState);
    });


    it('should handle SET_VISIBILITY_FILTER to SHOW_COMPLETED', () => {

      let initialState = SHOW_ALL;
      deepFreeze(initialState);

      let action = {
        type: SET_VISIBILITY_FILTER,
        filter: SHOW_COMPLETED
      };
      deepFreeze(action);

      let expectedState = SHOW_COMPLETED;

      expect(visibilityFilter(initialState, action)).to.deep.equal(expectedState);
    });


    it('should handle SET_VISIBILITY_FILTER to SHOW_UNCOMPLETED', () => {

      let initialState = SHOW_ALL;
      deepFreeze(initialState);

      let action = {
        type: SET_VISIBILITY_FILTER,
        filter: SHOW_UNCOMPLETED
      };

      deepFreeze(action);

      let expectedState = SHOW_UNCOMPLETED;

      expect(visibilityFilter(initialState, action)).to.deep.equal(expectedState);
    });
  });
});
