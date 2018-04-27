import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducer from './reducer';
// import thunkMiddleware from 'redux-thunk';

function configureStore (deps = {}) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // add middlewares here
  const middleware = [/*thunkMiddleware*/];
  // use the logger in development mode - this is set in webpack.config.dev.js
  if (process.env.NODE_ENV !== 'production') {
    console.warn('----- In Development Mode -----');
    middleware.push(require('redux-logger').createLogger());
  }

  return createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );
}

const store = configureStore();

export {
  configureStore,
  store
}
