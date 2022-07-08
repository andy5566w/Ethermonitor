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
    return state.blocks;
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
    // TODO This fake api
    commit("MUTATE_BLOCKS", fake_blocks());
    // const {
    //   data: {
    //     data: { currentStats, previousStats, price_chart_data },
    //   },
    // } = await fetchBlocks();
    // commit("MUTATE_BLOCKS", fake_blocks());
    // commit("MUTATE_CURRENT_STATE", currentStats);
    // commit("MUTATE_PREVIOUS_STATE", previousStats);
    // commit("MUTATE_PRICE_CHART_DATA", price_chart_data);
  },
};

const fake_blocks = () => {
  const retsult = [];
  for (let i = 0; i < 10; i++) {
    retsult.push({
      block_number: "15093834",
      time: Date.now() - +(Math.random() * 60).toFixed(0),
      miner: "Ethermine",
      txns: `${Math.round(327 * Math.random())}txns`,
      txns_time: Date.now() - +(Math.random() * 60).toFixed(0),
      value: +(Math.random() * 5).toFixed(5),
    });
  }
  return retsult;
};
