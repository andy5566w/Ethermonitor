<template>
  <div class="sm:container mx-10 sm:mx-auto overflow-auto">
    <h1 class="pt-5 font-medium text-xl text-header-color">Blocks</h1>

    <hr class="hr-space" />

    <div>
      <b class="text-text-secondary"
        >Featured: Build Precise & Reliable Apps with Etherscan APIs.</b
      >
      <a
        href="#"
        class="text-text-primary hover:text-text-primary-hover font-semibold ml-2"
        >Learn More!</a
      >
    </div>

    <div class="table rounded bg-white">
      <BlocksTable :items="blocks" :header="header">
        <template #item.Block>ttte</template>
      </BlocksTable>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { faker } from "@faker-js/faker";
import BlocksTable from "../../components/tables/BlocksTable.vue";

const blocks = ref([]);
const header = ref([
  {
    name: "Block",
  },
  {
    name: "Age",
  },
  {
    name: "Txn",
  },
  {
    name: "Uncles",
  },
  {
    name: "Miner",
  },
  {
    name: "Gas Used",
  },
  {
    name: "Gas Limit",
  },
  {
    name: "Base Fee",
  },
  {
    name: "Reward",
  },
  {
    name: "Burnt Fees (ETH)",
  },
]);

const initialize = () => {
  for (let i = 0; i < 50; i++) {
    const gasLimit = +(Math.random() * 3000000).toFixed(0);
    blocks.value.push({
      Block: "15127185",
      Age: Date.now() - +(Math.random() * 1000).toFixed(0),
      Txn: +(Math.random() * 300).toFixed(0),
      Uncles: 0,
      Miner: faker.internet.userName(),
      "Gas Used": gasLimit - +(Math.random() * 1000000).toFixed(0),
      "Gas Limit": gasLimit,
      "Base Fee": +(Math.random() * 15 + 1).toFixed(2),
      Reward: +(Math.random() * 3).toFixed(6),
      "Burnt Fees (ETH)": +((Math.random() * 3) / 100).toFixed(6),
    });
  }
};

initialize();
</script>

<style scoped lang="scss"></style>
