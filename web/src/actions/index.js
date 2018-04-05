export const UPDATE_WEB3_STATUS = 'UPDATE_WEB3_STATUS'

/**
 * Create an action to warn there is no web3 connection.
 * @param {boolean} payload
 */
export function updateWeb3Status (payload) {
  return {
    type: UPDATE_WEB3_STATUS,
    payload
  }
}
