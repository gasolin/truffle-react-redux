import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

// locale
import { addLocaleData, IntlProvider } from 'react-intl';
import enUS from './locales/en-US';
import zhHANT from './locales/zh-Hant';

import './App.css';
import Home from './components/Home';

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
        <Route exact path="/" component={Home} />
      </Router>
      </IntlProvider>
    );
  }
}

function mapState (state) {
  return {
    web3: state.web3,
  };
}

function mapDispatch (dispatch) {
  return {};
}

export default connect(mapState, mapDispatch)(App);
