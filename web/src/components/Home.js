import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Content from './Content';

export function Home (props) {
  return(
    <Fragment>
      <Header {...props} />
      <Content {...props} />
    </Fragment>
  );
}

Header.propTypes = {
  web3: PropTypes.object
};

export default Home;
