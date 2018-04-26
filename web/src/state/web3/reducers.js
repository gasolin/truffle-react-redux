import {
  UPDATE_WEB3_STATUS,
} from './types';

const initialState = {
  web3: null,
};

export function web3Reducer (state = initialState, action) {
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

export default web3Reducer;
