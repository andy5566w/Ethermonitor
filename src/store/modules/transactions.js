import { fetchTx } from "../../server/web3";

export const namespaced = true;

export const state = {
  // Below id is test id： "0x59f9d2896b5b12e8aac387842076d202f6ae4fdf19951c092570645225287725",
  transactions: [],
  transactionsIds: [],
};

export const getters = {
  getters_txs(state) {
    return state.transactions;
  },
};

export const mutations = {
  UPDATE_TRANSACTIONS(state, payload) {
    state.transactions.push(payload);
  },
  UPDATE_TRANSACTIONS_ID(state, id) {
    state.transactionsIds.push(id);
  },
};

export const actions = {
  async storeTransactionIds({ commit, dispatch }, txs = []) {
    txs.forEach((id) => {
      commit("UPDATE_TRANSACTIONS_ID", id);
      dispatch("fetchTransactionById", id);
    });
  },
  async fetchTransactionById({ commit }, txId) {
    const tx = await fetchTx(txId);
    commit("UPDATE_TRANSACTIONS", tx);
  },
  async testTransactionID({ commit, state }) {
    const testHash =
      "0x59f9d2896b5b12e8aac387842076d202f6ae4fdf19951c092570645225287725";
    if (state.transactions.some(({ hash }) => hash === testHash)) return;
    const tx = await fetchTx(testHash);
    commit("UPDATE_TRANSACTIONS", tx);
  },
};
