import Web3 from "web3";
import store from "../store";

const GETH_HOSTNAME = "18.189.248.109";
const GETH_RPCPORT = 8545;
let web3Instance = null;
let timer = null;
const blocks = [];
export const LIMIT_BLOCK_LENGTH = 10;

const fetchBlock = (currentNumber) => {
  web3Instance.eth.getBlock(currentNumber, function (error, result) {
    if (error) {
      console.log("fetchBlock error: ", error);
      return;
    }
    store.dispatch("blocks/storeBlock", result);
    console.log("result: ", result);
  });
};

export const initializeWeb3 = () => {
  try {
    web3Instance = new Web3();

    web3Instance.setProvider(
      new web3Instance.providers.HttpProvider(
        "http://" + GETH_HOSTNAME + ":" + GETH_RPCPORT
      )
    );
    if (!web3Instance.isConnected()) {
      alert(`web3 is disconnected`);
    }
  } catch (e) {
    console.log(e);
  }
};

export const updateBlockList = (isInitial = false) => {
  web3Instance.eth.getBlockNumber((err, currentNumber) => {
    if (blocks.find((b) => b === currentNumber)) return;

    if (isInitial) {
      for (let i = 1; LIMIT_BLOCK_LENGTH >= i; i++) {
        blocks.unshift(currentNumber - i);
        fetchBlock(currentNumber - i);
      }
    }
    blocks.unshift(currentNumber);
    fetchBlock(currentNumber);
  });
};

export const listenLatestData = () => {
  if (timer != null) {
    clearInterval(timer);
    timer = null;
  }
  updateBlockList(timer === null);
  timer = setInterval(() => {
    updateBlockList();
  }, 1000);
};
