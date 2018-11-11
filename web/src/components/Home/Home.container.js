import { drizzleConnect } from 'drizzle-react';

import Home from './Home';

function mapState(state) {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    // MyStringStore: state.contracts.MyStringStore,
    web3: state.web3,
  };
}

function mapDispatch(/* dispatch */) {
  return {};
}

export default drizzleConnect(Home, mapState, mapDispatch);
