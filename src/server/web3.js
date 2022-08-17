import Web3 from "web3";
import store from "../store";

let web3Instance = null;
let timer = null;
const blocks = [];
export const LIMIT_BLOCK_LENGTH = 10;

export const fetchBlock = (currentNumber) => {
  return new Promise((resolve, reject) => {
    web3Instance.eth.getBlock(currentNumber, function (error, result) {
      if (error) {
        console.log("fetchBlock error: ", error);
        reject(error);
        return;
      }
      store.dispatch("blocks/storeBlock", result);
      resolve(result);
    });
  });
};

export const fetchTx = (txId) => {
  return new Promise((resolve, reject) => {
    console.log("txId: ", txId);
    web3Instance.eth.getTransaction(txId, function (error, result) {
      console.log("error", error);
      if (error) {
        reject(error);
        return;
      }
      console.log("fetchTx:", result);
      resolve(result);
    });
  });
};

export const fetchTxByBlockHash = (blockHash) => {
  // 這是測試用的
  return new Promise((resolve, reject) => {
    console.log("blockHash: ", blockHash);
    web3Instance.eth.getTransactionFromBlock(
      blockHash,
      function (error, result) {
        console.log("error", error);
        if (error) {
          reject(error);
          return;
        }
        console.log("result", result);
        console.log(BigInt(result.value));
        resolve(result);
      }
    );
  });
};

export const initializeWeb3 = () => {
  try {
    web3Instance = new Web3();
    const url =
      "http://" +
      import.meta.env.VITE_GETH_HOSTNAME +
      ":" +
      import.meta.env.VITE_GETH_RPCPORT;
    console.log(`your url is ${url}`);

    web3Instance.setProvider(new web3Instance.providers.HttpProvider(url));
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
  if (timer != null || (web3Instance && !web3Instance.isConnected())) {
    clearInterval(timer);
    timer = null;
  }
  updateBlockList(timer === null);
  timer = setInterval(() => {
    updateBlockList();
  }, 1000);
};
