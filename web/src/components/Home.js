import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Content from './Content';

export function Home (props) {
  return(
    <div className="App">
    <Header {...props} />
    <Content {...props} />
    </div>
  );
}

Header.propTypes = {
  web3: PropTypes.object
};

export default Home;
