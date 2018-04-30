import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// locale
import { addLocaleData, IntlProvider } from 'react-intl';
import enUS from './locales/en-US';
import zhHANT from './locales/zh-Hant';

import './App.css';
import NoMatch from './components/NoMatch';
import Home from './containers/Home';
// import Counter from './components/About';

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
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/about" component={About} /> */}
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
