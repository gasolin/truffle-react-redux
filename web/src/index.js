import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Eth from 'ethjs';
import './index.css';
import App from './App';
import { configureStore } from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import {
  updateWeb3Status
} from './actions';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

window.addEventListener('load', () => {
  let hasWeb3 = typeof window.web3 !== 'undefined';
  let web3 = hasWeb3 ? new Eth(window.web3.currentProvider) : null;
  store.dispatch(updateWeb3Status(web3));
});
