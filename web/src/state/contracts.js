// import HelloToken from "../lib/contracts/HelloToken.json";

// let drizzle know what contracts we want
const contractOptions = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://localhost:8545"
    }
  },
  contracts: [],
};

export default contractOptions
