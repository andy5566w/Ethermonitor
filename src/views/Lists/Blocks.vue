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

    <div class="table rounded bg-white p-5 w-full">
      <DataTable :items="blocks" :header="header">
        <template #Block></template>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { faker } from "@faker-js/faker";
import DataTable from "../../components/tables/DataTable.vue";

const blocks = ref([]);
const header = ref([
  { value: "Block", text: "Block" },
  { value: "Age", text: "Age" },
  { value: "Txn", text: "Txn" },
  { value: "Uncles", text: "Uncles" },
  { value: "Miner", text: "Miner" },
  { value: "GasUsed", text: "Gas Used" },
  { value: "GasLimit", text: "Gas Limit" },
  { value: "BaseFee", text: "Base Fee" },
  { value: "Reward", text: "Reward" },
  { value: "BurntFees", text: "Burnt Fees (ETH)" },
]);

const initialize = () => {
  for (let i = 0; i < 50; i++) {
    const GasLimit = +(Math.random() * 3000000).toFixed(0);
    blocks.value.push({
      Block: "15127185",
      Age: Date.now() - +(Math.random() * 1000).toFixed(0),
      Txn: +(Math.random() * 300).toFixed(0),
      Uncles: 0,
      Miner: faker.internet.userName(),
      GasUsed: GasLimit - +(Math.random() * 1000000).toFixed(0),
      GasLimit,
      BaseFee: +(Math.random() * 15 + 1).toFixed(2),
      Reward: +(Math.random() * 3).toFixed(6),
      BurntFees: +((Math.random() * 3) / 100).toFixed(6),
    });
  }
};

initialize();
</script>

<style scoped lang="scss"></style>
