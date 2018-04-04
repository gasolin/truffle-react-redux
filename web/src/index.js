import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import { configureStore } from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import {
  warnNoWeb3Connection
} from './actions';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

window.addEventListener('load', () => {
  let hasWeb3 = typeof window.web3 === 'undefined';
  store.dispatch(warnNoWeb3Connection(hasWeb3));
});
