// import { fetchBlocks } from "../../server/ether";

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
  getters_blocks(state) {
    return state.blocks.sort((a, b) => b.number - a.number);
  },
};

export const mutations = {
  MUTATE_BLOCKS(state, payload) {
    state.blocks.unshift(payload);
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
  storeBlock({ commit }, block) {
    commit("MUTATE_BLOCKS", block);
  },
};
