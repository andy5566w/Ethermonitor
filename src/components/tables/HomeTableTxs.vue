<template>
  <DataTable
    class="w-full overflow-auto homeTableTxs"
    :items="transactions"
    :header="header"
  >
    <template #blockHash="{ value }">
      <div class="truncate">
        <router-link
          :to="{ name: 'singlePageOfBlock', params: { id: value } }"
          tag="a"
          class="text-text-primary hover:text-text-primary-hover"
          >{{ value }}</router-link
        >
      </div>
    </template>

    <template #from="{ value }">
      <div class="truncate">
        {{ value }}
      </div>
    </template>

    <template #to="{ value }">
      <div class="truncate">
        {{ value }}
      </div>
    </template>

    <template #gasPrice="{ value }">
      <div class="truncate">
        {{ value }}
      </div>
    </template>

    <template #gas="{ value }">
      <div class="truncate">
        {{ value }}
      </div>
    </template>

    <template #nonce="{ value }">
      <div class="truncate">
        {{ value }}
      </div>
    </template>

    <template #input="{ value }">
      <div class="truncate">
        {{ value }}
      </div>
    </template>

    <template #hash="{ value }">
      <div class="truncate">
        <router-link
          :to="{ name: 'singlePageOfTx', params: { id: value } }"
          tag="a"
          class="text-text-primary hover:text-text-primary-hover"
          >{{ value }}</router-link
        >
      </div>
    </template>

    <template #table-footer>
      <div></div>
    </template>
  </DataTable>
</template>

<script setup>
// import EtherButton from "../button/EtherButton.vue";
import DataTable from "../tables/DataTable.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

//  this is for test
store.dispatch("transactions/testTransactionID");

const transactions = computed(() => {
  return store.getters["transactions/getters_txs"];
});

const header = [
  { value: "blockHash", text: "Block Hash" },
  { value: "blockNumber", text: "Block Number" },
  { value: "from", text: "From" },
  { value: "to", text: "To" },
  { value: "gasPrice", text: "Gas Price" },
  { value: "gas", text: "Gas" },
  { value: "hash", text: "Transaction Hash" },
  { value: "nonce", text: "Nonce" },
  { value: "input", text: "Input" },
];
</script>

<style lang="scss">
.homeTableTxs {
  tbody {
    display: block;
    overflow: auto;
    max-height: 500px;
  }

  tr {
    width: 100%;
    display: table;
    table-layout: fixed !important;
  }
}
</style>
