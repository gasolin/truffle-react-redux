/* global test, expect */
import * as actions from '../actions/index'

test('should create an action to update web3 status', () => {
  const expectedAction = {
    type: actions.UPDATE_WEB3_STATUS,
    payload: new Object()
  };
  expect(actions.updateWeb3Status(new Object())).toEqual(expectedAction)

  const expectedNoConnectionAction = {
    type: actions.UPDATE_WEB3_STATUS,
    payload: null
  };
  expect(actions.updateWeb3Status(null)).toEqual(expectedNoConnectionAction)
});
