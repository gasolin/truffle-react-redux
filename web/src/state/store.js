import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga'
import { generateContractsInitialState } from 'drizzle'

import reducer from './reducers';
import contractOptions from './contracts'
// import thunkMiddleware from 'redux-thunk';
import saga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const initialState = {
  contracts: generateContractsInitialState(contractOptions)
}

function configureStore(/* deps = {} */) {
  /* eslint-disable-next-line no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // add middlewares here
  const middleware = [/* thunkMiddleware, */sagaMiddleware];
  // use the logger in development mode - this is set in webpack.config.dev.js
  if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable-next-line no-console */
    console.warn('----- In Development Mode -----');
    /* eslint-disable-next-line import/no-extraneous-dependencies, global-require */
    middleware.push(require('redux-logger').createLogger());
  }

  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
}

const store = configureStore();
sagaMiddleware.run(saga)

export {
  configureStore,
  store,
};
