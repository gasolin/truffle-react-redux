import Eth from 'ethjs';

let web3 = null

if (typeof window.web3 !== 'undefined') {
  web3 = new Eth(window.web3.currentProvider);
} else {
  console.log('No web3? You should consider trying MetaMask!');
  // set the provider you want from Web3.providers
  // ethWeb3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
}

export {
  web3
}
