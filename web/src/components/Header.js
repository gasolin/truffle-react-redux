import React from 'react';
import PropTypes from 'prop-types';

export function Header (props) {
  let connectionMsg = props.web3 ?
    'Connected to the blockchain' : 'Not connect to the blockchain';
  return(
    <header className="App-header">
      <h1 className="App-title">{connectionMsg}</h1>
    </header>
  );
}

Header.propTypes = {
  web3: PropTypes.object
}

export default Header
