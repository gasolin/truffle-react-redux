import React from 'react';
// import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

export function Content(/* props */) {
  return (
    <p className="App-intro">
      To get started, edit
      &nbsp;
      <code>
src/App.js
      </code>
      &nbsp;
and save to reload.
    </p>
  );
}

Content.propTypes = {
};

export default injectIntl(Content);
