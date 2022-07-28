<template>
  <HomeSearch />
  <div
    class="current-info sm:container mx-10 sm:mx-auto sm:h-44 shadow-md bg-white border-amber-900 rounded-xl grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 items-center p-3 -mt-14"
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
            class="text-black hover:text-text-primary cursor-pointer text-sm truncate"
            >{{ data }}</a
          >
        </div>

        <div v-if="index === 1" class="ml-auto md:mr-10">
          <div class="text-text-secondary text-sm">MED GAS PRICE</div>
          <a
            href="#"
            class="text-black hover:text-text-primary text-sm truncate"
            >12 Gwei
            <span class="text-text-secondary text-sm truncate">($0.32)</span></a
          >
        </div>
        <div v-else-if="index === 3" class="ml-auto md:mr-10">
          <div class="text-text-secondary text-sm truncate">HASH RATE</div>
          <a
            href="#"
            class="text-black hover:text-text-primary text-sm truncate"
            >914,074.65 GH/s</a
          >
        </div>
      </div>
      <hr v-if="index === 0 || index === 1" class="max-w-[90%] mt-2" />
      <hr
        v-if="index === 2 || index === 3"
        class="md:hidden max-w-[90%] mt-2"
      />
    </div>

    <div data-chart class="w-full h-full"><HomeChart /></div>
  </div>

  <div
    class="sm:container mx-10 sm:mx-auto border-amber-900 rounded-xl mt-5 mb-16 lg:flex flex-wrap"
  >
    <div class="blocks shadow-md md:flex-1 rounded-xl overflow-hidden">
      <HomeTable header-text="Latest Blocks" :data="blocks" icon-text="Bk" />
    </div>
    <div class="my-5 lg:my-0 mx-5"></div>
    <div class="transactions shadow-md md:flex-1 rounded-xl overflow-hidden">
      <HomeTable
        header-text="Latest Transactions"
        :data="blocks"
        icon-text="Tx"
        :type="'transactions'"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import HomeSearch from "../components/HomeSearch.vue";
import HomeTable from "../components/tables/HomeTable.vue";
import HomeChart from "../components/chart/chart.vue";
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
});
</script>

<style scoped lang="scss">
.current-info {
  position: relative;
  @media (max-width: 768px) {
    &:before,
    &:after {
      display: none;
    }
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 1px;
    height: 87%;
    background-color: var(--border-color);
    top: 10px;
  }
  &:before {
    left: 32.2%;
  }
  &:after {
    left: 65%;
  }
}
@media (min-width: 640px) {
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
}
</style>
