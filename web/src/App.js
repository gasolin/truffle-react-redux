import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// locale
import { addLocaleData, IntlProvider } from 'react-intl';
import enUS from './locales/en-US';
import zhHANT from './locales/zh-Hant';

import './App.css';
import Home from './components/Home';
// import Counter from './components/Counter';

addLocaleData(zhHANT.data);
addLocaleData(enUS.data);

export class App extends Component {
  getLocale =() => {
    const lang = localStorage.getItem('lang');
    switch (lang) {
      case 'zhHANT':
        return zhHANT;
      default:
        return enUS;
    }
  }

  render() {
    const locale = this.getLocale();
    return (
      <IntlProvider locale={locale.locale} messages={locale.messages}>
        <Router basename="/">
          <div className="App">
            <Route exact path="/" component={Home} />
            {/* <Route path="/counter" componet={Counter} /> */}
          </div>
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
