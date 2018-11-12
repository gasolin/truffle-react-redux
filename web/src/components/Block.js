import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

export function Block(props) {
  const {
    drizzleStatus,
    intl,
    web3,
  } = props;
  const web3Status = web3 && web3.status !== 'failed' ? 'Connected' : 'NotConnected';
  return (
    <header className="App-header">
      <h1 className="App-title">
        {intl.formatMessage({ id: web3Status })} <br/>
        Drizzle is {drizzleStatus.initialized ? 'initialized' : 'not initialized'}
      </h1>
    </header>
  );
}

Block.propTypes = {
  web3: PropTypes.object,
  intl: PropTypes.object.isRequired,
};

Block.defaultProps = {
  web3: null,
};

export default injectIntl(Block);
