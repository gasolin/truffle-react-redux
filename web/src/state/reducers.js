import { combineReducers } from 'redux';
import { drizzleReducers } from 'drizzle'

export default combineReducers({
  ...drizzleReducers,
});
