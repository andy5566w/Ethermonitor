import Web3 from "web3";

const GETH_HOSTNAME = "18.189.248.109";
const GETH_RPCPORT = 8545;
let web3Instance = null;

export const initializeWeb3 = () => {
  try {
    web3Instance = new Web3();

    web3Instance.setProvider(
      new web3Instance.providers.HttpProvider(
        "http://" + GETH_HOSTNAME + ":" + GETH_RPCPORT
      )
    );
    console.log("web3Instance: ", web3Instance);
  } catch (e) {
    console.log(e);
  }
};

export const fetchAllData = () => {
  const testBlockNumber =
    "0x2b75067144d5ab7845cc01975da8470d13742a66d53d043791ede93ed7a06245";

  web3Instance.eth.getBlock(testBlockNumber, function (error, result) {
    console.log("error: ", error);
    console.log("result: ", result);
  });
};
