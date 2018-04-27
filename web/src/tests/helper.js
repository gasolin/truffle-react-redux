import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { addLocaleData, IntlProvider } from 'react-intl';

import locale from '../locales/en-US';
addLocaleData(locale.data);

// refer from https://github.com/yahoo/react-intl/wiki/Testing-with-React-Intl
export function renderWithIntl(element, root) {
  let instance = ReactDOM.render(
    <IntlProvider locale={locale.locale} messages={locale.messages}>
      {React.cloneElement(element)}
    </IntlProvider>
  , root);

  return instance;
}

export function rendererCreateWithIntl(element) {
  let instance = renderer.create(
    <IntlProvider locale={locale.locale} messages={locale.messages}>
      {React.cloneElement(element)}
    </IntlProvider>
  );

  return instance;
}
