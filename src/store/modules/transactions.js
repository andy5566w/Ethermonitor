// import { fetchTxs } from "../../server/ether";

export const namespaced = true;

export const state = {
  // Below id is test id
  transactions: [
    "0x59f9d2896b5b12e8aac387842076d202f6ae4fdf19951c092570645225287725",
  ],
};

export const getters = {
  getters_txs() {
    return state.transactions;
  },
};

export const mutations = {
  UPDATE_TRANSACTIONS(state, payload) {
    state.transactions.push(payload);
  },
};

export const actions = {
  async storeTransactionIds({ commit }, txs = []) {
    txs.forEach((id) => {
      commit("UPDATE_TRANSACTIONS", id);
    });
  },
};
