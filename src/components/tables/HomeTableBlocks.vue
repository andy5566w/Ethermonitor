<template>
  <DataTable
    class="w-full overflow-auto homeTableBlock"
    :items="blocks"
    :header="header"
  >
    <template #number="{ value }"
      ><a
        href="#"
        class="text-text-primary hover:text-text-primary-hover cursor-pointer"
        >{{ value }}</a
      ></template
    >

    <template #hash="{ value }">
      <div class="truncate">
        <a
          href="#"
          class="text-text-primary hover:text-text-primary-hover cursor-pointer truncate"
          >{{ value }}</a
        >
      </div>
    </template>

    <template #difficulty="{ value }">
      {{ calculateDifficulty(value) }}
    </template>

    <template #miner="{ value }">
      <div class="truncate">
        <a
          href="#"
          class="text-text-primary hover:text-text-primary-hover cursor-pointer"
          >{{ value }}</a
        >
      </div>
    </template>

    <template #size="{ value }">
      {{ getSize(value) }}
    </template>

    <template #timestamp="{ value }">
      {{ getTime(value) }}
    </template>

    <template #transactions="{ value }">
      {{ Array.isArray(value) ? value.length : 0 }}
    </template>

    <template #gasUsed="{ value }">
      {{ value + " m/s" }}
    </template>

    <template #table-footer>
      <EtherButton>View All Blocks</EtherButton>
    </template>
  </DataTable>
</template>

<script setup>
import EtherButton from "../button/EtherButton.vue";
import { calculateDifficulty, getSize, getTime } from "../../utils/tableUtils";
import DataTable from "../tables/DataTable.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const blocks = computed(() => {
  return store.getters["blocks/getters_blocks"];
});
const header = ref([
  { value: "number", text: "number" },
  { value: "hash", text: "Black Hash" },
  { value: "difficulty", text: "Difficulty" },
  { value: "miner", text: "Miner" },
  { value: "size", text: "Size" },
  { value: "timestamp", text: "Age" },
  { value: "transactions", text: "# of TXs" },
  { value: "gasUsed", text: "Gas used" },
]);
</script>

<style lang="scss">
.homeTableBlock {
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
