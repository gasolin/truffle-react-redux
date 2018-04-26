/* global test, expect */
import { web3Reducer as reducer } from './reducers';
import { UPDATE_WEB3_STATUS } from './types';

const initBlockState = {
  web3: null
};

const connectedBlockState = {
  web3: new Object()
};

const notConnectedBlockState = {
  web3: null
};

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initBlockState);
});

it('should handle UPDATE_WEB3_STATUS when connected', () => {
  expect(reducer(
    initBlockState,
    {
      type: UPDATE_WEB3_STATUS,
      payload: new Object()
    }
  )).toEqual(connectedBlockState);
})

it('should handle UPDATE_WEB3_STATUS when not connected', () => {
  expect(reducer(
    initBlockState,
    {
      type: UPDATE_WEB3_STATUS,
      payload: null
    }
  )).toEqual(notConnectedBlockState);
});
