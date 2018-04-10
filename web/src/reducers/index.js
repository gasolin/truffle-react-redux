// import {combineReducers} from 'redux'
// import {blockReducer} from './blocks'

// export default combineReducers({
//   blocks: blockReducer
// })

import {
  UPDATE_WEB3_STATUS,
} from '../actions/actionTypes'

const initialState = {
  web3: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_WEB3_STATUS:
      return {
        ...state,
        web3: action.payload
      };
      default:
        return state;
  }
}
