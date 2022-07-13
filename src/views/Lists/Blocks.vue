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

    <div class="table rounded-md bg-white px-5 mt-4 w-full border">
      <div class="flex items-center pt-3 pb-5">
        <h2
          class="text-table-header-color font-base text-base mr-auto self-start"
        >
          Block #15127977 to #15128001 (Total of 15,128,002 blocks)
        </h2>

        <div class="flex items-center space-x-3">
          <EtherButton class="px-3">First</EtherButton>
          <EtherButton class="px-3"
            ><ChevronLeftIcon class="w-5"
          /></EtherButton>
          <EtherButton class="px-3"
            ><p class="whitespace-nowrap">Page 1 of 605121</p></EtherButton
          >
          <EtherButton class="px-3"
            ><ChevronRightIcon class="w-5"
          /></EtherButton>
          <EtherButton class="px-3">Last</EtherButton>
        </div>
      </div>

      <DataTable :items="blocks" :header="header">
        <template #Block="{ value }">
          <a
            href="#"
            class="text-text-primary hover:text-text-primary-hover font-semibold ml-2"
            >{{ value }}</a
          ></template
        >
        <template #Age="{ value }"> {{ timeSince(value) }} </template>

        <template #Txn="{ value }">
          <a
            href="#"
            class="text-text-primary hover:text-text-primary-hover font-semibold ml-2"
            >{{ value }}</a
          ></template
        >

        <template #Miner="{ value }">
          <a
            href="#"
            class="text-text-primary hover:text-text-primary-hover font-semibold ml-2"
            >{{ value }}</a
          ></template
        >

        <template #GasUsed="{ value, item }">
          <span>{{ value }}</span>
          <Progress :value="value" :maximum="item.GasLimit" />
        </template>

        <template #BurntFees="{ value, item }">
          <span>{{ value }}</span>
          <Progress :value="value" :maximum="0.1" :value-color="'#db9a04'" />
        </template>
      </DataTable>
    </div>
    <p class="flex mt-5 mb-20 text-header-color text-sm">
      <SearchIcon class="w-3 mr-2" />
      Blocks are batches of transactions linked together via cryptographic
      hashes. Any tampering of a block would invalidate all following blocks as
      all subsequent hashes would change. Learn more about this page in our
      <a
        href="#"
        class="text-text-primary hover:text-text-primary-hover font-semibold ml-2"
        >Knowledge Base</a
      >.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { faker } from "@faker-js/faker";
import { timeSince } from "../../utils/utils";
import DataTable from "../../components/tables/DataTable.vue";
import Progress from "../../components/Progress.vue";
import EtherButton from "../../components/button/EtherButton.vue";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@heroicons/vue/outline";

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
      GasUsed: +(GasLimit * ((Math.random() * 4 + 1) / 10)).toFixed(0),
      GasLimit,
      BaseFee: +(Math.random() * 15 + 1).toFixed(2) + " Gwei",
      Reward: +(Math.random() * 3).toFixed(6) + " Ether",
      BurntFees: +((Math.random() * 3) / 100).toFixed(6),
    });
  }
};

initialize();
</script>

<style scoped lang="scss"></style>
