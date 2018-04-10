import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducer from './reducers';

export function configureStore (deps = {}) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // add middlewares here
  const middleware = [];

  return createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  )
}
