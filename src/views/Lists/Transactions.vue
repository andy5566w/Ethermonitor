<template>
  <div class="sm:container mx-10 sm:mx-auto overflow-auto">
    <h1 class="pt-5 font-medium text-xl text-header-color">Transactions</h1>

    <hr class="hr-space" />

    <div>
      <b class="text-text-secondary"
        >Featured: Build Precise & Reliable Apps with Etherscan APIs.
      </b>
      <a
        href="#"
        class="text-text-primary hover:text-text-primary-hover font-semibold ml-2"
        >Learn More!</a
      >
    </div>

    <div class="table rounded-md bg-white px-5 mt-4 w-full border">
      <div class="flex items-start pt-3 pb-5">
        <h2
          class="text-table-header-color font-base text-base mr-auto self-start"
        >
          More than > 1,638,144,122 transactions found <br />
          (Showing the last 500k records)
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
        <template #icon>
          <EyeIconOutline class="icon w-6 rounded" />
        </template>

        <template #txnHash="{ value }">
          <a
            href="#"
            class="text-text-primary hover:text-text-primary-hover font-semibold ml-2"
            >{{ value }}</a
          ></template
        >
        <template #method="{ value }"
          ><span class="method"> {{ value }}</span>
        </template>

        <template #block="{ value }">
          <a
            href="#"
            class="text-text-primary hover:text-text-primary-hover font-semibold ml-2"
            >{{ value }}</a
          >
        </template>

        <template #from="{ value }">
          <a
            href="#"
            class="text-text-primary hover:text-text-primary-hover font-semibold ml-2"
            >{{ value }}</a
          >
        </template>

        <template #to="{ value }">
          <DocumentTextIcon class="w-5 inline-block" />
          <a
            href="#"
            class="text-text-primary hover:text-text-primary-hover font-semibold ml-2"
            >{{ value }}</a
          >
        </template>
      </DataTable>
    </div>

    <p class="flex mt-5 mb-20 text-header-color text-sm"></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DataTable from "../../components/tables/DataTable.vue";
import EtherButton from "../../components/button/EtherButton.vue";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeIcon as EyeIconOutline,
  DocumentTextIcon,
} from "@heroicons/vue/outline";

const blocks = ref([]);
const header = ref([
  { value: "icon", text: "" },
  { value: "txnHash", text: "Txn Hash" },
  { value: "method", text: "Method" },
  { value: "block", text: "Block" },
  { value: "age", text: "Age" },
  { value: "from", text: "From" },
  { value: "to", text: "To" },
  { value: "value", text: "Value" },
  { value: "txnFee", text: "Txn Fee" },
]);

const initialize = () => {
  const Methods = [
    "0xfb0f3ee1",
    "Whitelist Mint",
    "0x41706c4e",
    "Transfer",
    "0xe3a54629",
    "Mint",
    "Append Sequencer",
    "Public Mint",
    "0xfb0f3ee1",
    "Multicall",
    "Exec Transaction",
    "Execute Meta Tx",
  ];
  for (let i = 0; i < 50; i++) {
    blocks.value.push({
      icon: "",
      txnHash: Math.random().toString(16).slice(2),
      method: Methods[+(Math.random() * (Methods.length - 1)).toFixed(0)],
      block: 15134706,
      age: "22 secs ago",
      from: Math.random().toString(16).slice(2),
      to: Math.random().toString(16).slice(2),
      value: +(Math.random() * 3).toFixed(6) + " Ether",
      txnFee: +((Math.random() * 3) / 100).toFixed(6),
    });
  }
};

initialize();
</script>

<style scoped lang="scss">
.table {
  .icon {
    padding: 2px;
    background-color: rgba(119, 131, 143, 0.1);
    transition: all 0.2s ease-in;
    cursor: pointer;

    &:hover {
      color: #fff;
      background: #77838f;
      box-shadow: 0 4px 11px rgb(119 131 143 / 35%);
      text-decoration: none;
    }
  }

  .method {
    font-size: 0.65625rem;
    line-height: 1.7;
    padding: 0.2rem 0.5rem;
    background-color: rgba(52, 152, 219, 0.1);
  }
}
</style>
