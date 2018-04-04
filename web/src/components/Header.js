import React from 'react';
import PropTypes from 'prop-types';

export function Header (props) {
  let noConnectionMsg = props.noConnection === true ?
    'Not connected to the blockchain' : 'Connected to the blockchain';
  return(
    <header className="App-header">
      <h1 className="App-title">{noConnectionMsg}</h1>
    </header>
  )
}

Header.propTypes = {
  noConnection: PropTypes.bool.isRequired
}

export default Header
