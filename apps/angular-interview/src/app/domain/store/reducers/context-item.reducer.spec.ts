import { ContextItemReducer } from './index';

const deepFreeze = require('deep-freeze');

//TODO: #3 Implement test for all the actions

describe('ContextItemReducer', () => {
  describe('When an unknown is dispatched', () => {
    it('should not modify the state', () => {
      const initialState = ContextItemReducer.initialState;
      deepFreeze(initialState);
      const newState = ContextItemReducer.reducer(initialState, { type: 'UNKNOWN' });
      expect(newState).toBe(initialState);
    });
  });
});
