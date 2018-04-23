import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Eth from 'ethjs';
import './index.css';
import App from './App';
import { store } from './store';
import { updateWeb3Status } from './actions';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

window.addEventListener('load', () => {
  // could remove and only use lib/web3utils
  let hasWeb3 = typeof window.web3 !== 'undefined';
  let web3 = hasWeb3 ? new Eth(window.web3.currentProvider) : null;
  store.dispatch(updateWeb3Status(web3));
});
