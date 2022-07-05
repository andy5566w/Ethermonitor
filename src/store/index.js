import { createStore } from "vuex";
import * as blocks from "./modules/blocks";
import * as transactions from "./modules/transactions";

export default createStore({
  modules: { blocks, transactions },
});
