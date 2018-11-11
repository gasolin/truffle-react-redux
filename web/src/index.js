import React from 'react';
import ReactDOM from 'react-dom';
import { DrizzleProvider } from 'drizzle-react';

import './index.css';
import App from './App';
import { store } from './state/store';
import contractOptions from './state/contracts';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <DrizzleProvider options={contractOptions} store={store}>
    <App />
  </DrizzleProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
