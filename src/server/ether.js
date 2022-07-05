import axios from "axios";

export const fetchBlocks = async () => {
  try {
    const { data, status } = await axios.get(
      "http://localhost:3001/api/v1/ether"
    );
    return { ok: status, data };
  } catch (error) {
    return { error, ok: false };
  }
};

export const fetchTxs = async () => {
  try {
    const { data, status } = await axios.get(
      "http://localhost:3001/api/v1/ether/txs?draw=0"
    );
    return { ok: status, data };
  } catch (error) {
    return { error, ok: false };
  }
};
