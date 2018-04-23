import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducer from './reducers';
// import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

function configureStore (deps = {}) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // add middlewares here
  const middleware = [/*thunkMiddleware*/];
  // use the logger in development mode - this is set in webpack.config.dev.js
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

return createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  )
}

const store = configureStore();

export {
  configureStore,
  store
}
