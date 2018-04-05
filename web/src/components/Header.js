import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

export function Header (props) {
  const intl = props.intl;
  let web3Status = props.web3 ? 'Connected' : 'NotConnected';
  return(
    <header className="App-header">
      <h1 className="App-title">{intl.formatMessage({ id: web3Status })}</h1>
    </header>
  );
}

Header.propTypes = {
  web3: PropTypes.object
};

export default injectIntl(Header);
