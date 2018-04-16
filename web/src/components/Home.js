import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Block from './Block';
import Content from './Content';

export function Home (props) {
  return(
    <Fragment>
      <Block {...props} />
      <Content {...props} />
    </Fragment>
  );
}

Home.propTypes = {
  web3: PropTypes.object
};

function mapState (state) {
  return {
    web3: state.web3.web3,
  };
}

function mapDispatch (dispatch) {
  return {};
}

export default connect(mapState, mapDispatch)(Home);
