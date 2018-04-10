/* global test, expect */
import {
  UPDATE_WEB3_STATUS
} from '../actions/actionTypes';
import {
  updateWeb3Status
} from '../actions/index'

test('should create an action to update web3 status', () => {
  const expectedAction = {
    type: UPDATE_WEB3_STATUS,
    payload: new Object()
  };
  expect(updateWeb3Status(new Object())).toEqual(expectedAction)

  const expectedNoConnectionAction = {
    type: UPDATE_WEB3_STATUS,
    payload: null
  };
  expect(updateWeb3Status(null)).toEqual(expectedNoConnectionAction)
});
