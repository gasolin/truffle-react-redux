import {
  UPDATE_WEB3_STATUS
} from './types';

/**
 * Create an action to warn there is no web3 connection.
 * @param {boolean} payload
 */
export function updateWeb3Status (payload) {
  return {
    type: UPDATE_WEB3_STATUS,
    payload
  };
}
