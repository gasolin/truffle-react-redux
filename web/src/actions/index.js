export const WARN_NO_WEB3_CONNECTION = 'WARN_WEB3_CONNECTION'

/**
 * Create an action to warn there is no web3 connection.
 * @param {boolean} payload
 */
export function warnNoWeb3Connection (payload) {
  return {
    type: WARN_NO_WEB3_CONNECTION,
    payload
  }
}
