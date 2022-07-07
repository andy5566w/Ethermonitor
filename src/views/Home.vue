<template>
  <HomeSearch />
  <div
    class="container mx-auto h-44 shadow-md bg-white border-amber-900 rounded-xl grid grid-cols-3 grid-rows-2 p-3 -mt-14"
  >
    <div
      v-for="({ title, data }, index) in panelData"
      :key="title"
      :data-index="index"
    >
      <div class="flex items-center p-2">
        <CubeTransparentIcon class="w-8 stroke-[3px] mr-2" />
        <div>
          <h4 class="uppercase text-text-secondary text-sm">{{ title }}</h4>
          <a
            class="text-black hover:text-text-primary cursor-pointer text-sm"
            >{{ data }}</a
          >
        </div>
      </div>
    </div>

    <div data-chart>Chart</div>
  </div>

  <div
    class="container mx-auto bg-white border-amber-900 rounded-xl mt-5 flex flex-wrap"
  >
    <div class="blocks shadow-md rounded md:flex-1">
      <HomeTable header-text="Latest Blocks" :data="blocks" icon-text="Bk" />
    </div>
    <div class="mx-5"></div>
    <div class="transactions shadow-md rounded md:flex-1">
      <HomeTable header-text="Latest Blocks" :data="blocks" icon-text="Bk" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import HomeSearch from "../components/HomeSearch.vue";
import HomeTable from "../components/tables/HomeTable.vue";
import { CubeTransparentIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";

const store = useStore();
const panelData = computed(() => {
  const { difficulty, price_usd, price_btc } =
    store.getters["blocks/getters_currentState"];
  return [
    {
      title: "ETHER PRICE",
      data: `$${price_usd} @ ${price_btc}`,
    },
    {
      title: "TRANSACTIONS",
      data: "134,807,061,859.00",
    },
    {
      title: "MARKET CAP",
      data: "134,807,061,859.00",
    },
    {
      title: "DIFFICULTY",
      data: difficulty || "no data",
    },
  ];
});
const blocks = computed(() => {
  return store.getters["blocks/getters_blocks"];
});

onMounted(() => {
  store.dispatch("transactions/fetchTxsFromAPI");
  store.dispatch("blocks/fetchBlocksFromAPI");
});
</script>

<style scoped lang="scss">
[data-index="0"] {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
[data-index="1"] {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}
[data-index="2"] {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
[data-index="3"] {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

[data-chart] {
  grid-column: 3 / -1;
  grid-row: 1 / -1;
}
</style>
