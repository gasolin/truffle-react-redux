// import {combineReducers} from 'redux'
// import {blockReducer} from './blocks'

// export default combineReducers({
//   blocks: blockReducer
// })

import {
  WARN_NO_WEB3_CONNECTION,
} from '../actions'

const initialState = {
  noConnection: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case WARN_NO_WEB3_CONNECTION:
      return {
        ...state,
        noConnection: action.payload
      };
      default:
        return state;
  }
}
