import { fetchBlocks } from "../../server/ether";

export const namespaced = true;

export const state = {
  blocks: [],
  currentStats: {},
  previousStats: {},
  price_chart_data: {},
};

export const getters = {
  getters_currentState(state) {
    return state.currentStats;
  },
};

export const mutations = {
  MUTATE_BLOCKS(state, payload) {
    state.blocks = payload;
  },
  MUTATE_CURRENT_STATE(state, payload) {
    state.currentStats = payload;
  },
  MUTATE_PREVIOUS_STATE(state, payload) {
    state.previousStats = payload;
  },
  MUTATE_PRICE_CHART_DATA(state, payload) {
    state.price_chart_data = payload;
  },
};

export const actions = {
  async fetchBlocksFromAPI({ commit }) {
    const {
      data: {
        data: { blocks, currentStats, previousStats, price_chart_data },
      },
    } = await fetchBlocks();
    commit("MUTATE_BLOCKS", blocks);
    commit("MUTATE_CURRENT_STATE", currentStats);
    commit("MUTATE_PREVIOUS_STATE", previousStats);
    commit("MUTATE_PRICE_CHART_DATA", price_chart_data);
  },
};
