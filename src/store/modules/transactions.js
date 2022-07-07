import { fetchTxs } from "../../server/ether";

export const namespaced = true;

export const state = {
  transactions: [],
};

export const getters = {
  getters_txs() {
    return state.transactions;
  },
};

export const mutations = {
  MUTATE_TRANSACTIONS(state, payload) {
    state.transactions = payload;
  },
};

export const actions = {
  async fetchTxsFromAPI({ commit }) {
    const {
      data: {
        data: { data },
      },
    } = await fetchTxs();
    commit("MUTATE_TRANSACTIONS", data);
  },
};
