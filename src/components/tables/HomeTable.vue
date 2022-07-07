<template>
  <div class="table rounded-xl w-full">
    <h2 class="table__header px-3 pt-3 text-base font-semibold">
      {{ headerText }}
    </h2>
    <hr class="hr-space" />
    <div class="table__body max-h-[400px] overflow-y-auto">
      <div
        v-for="(d, index) in data"
        :key="index"
        class="flex item-center px-5 py-2 flex-wrap"
      >
        <div class="sm:flex-[0_0_33.3333%] flex items-start">
          <span
            class="w-10 h-10 rounded inline-block bg-block-color text-center leading-10 font-base mr-2"
          >
            {{ iconText }}
          </span>
          <div class="inline-block">
            <a
              href="#"
              class="text-text-primary hover:text-text-primary-hover"
              >{{ d.block_number }}</a
            >
            <div class="text-text-secondary">{{ timeSince(d.time) }}</div>
          </div>
        </div>

        <div class="sm:flex-[0_0_66.6667%] flex justify-between items-start">
          <div>
            <p>
              Miner
              <a
                href="#"
                class="text-text-primary hover:text-text-primary-hover"
                >{{ d.miner }}</a
              >
            </p>
            <p>
              <a
                href="#"
                class="text-text-primary hover:text-text-primary-hover"
                >{{ d.txns }}</a
              >
              in
              <span class="text-text-secondary">
                {{ timeSince(d.txns_time) }}</span
              >
            </p>
          </div>
          <div
            class="table__body--label text-label-text-second-color bg-label-second-color pr-2 pl-5 py-1 tracking-wider"
          >
            {{ d.value }} Eth
          </div>
        </div>

        <hr class="hr-space" />
      </div>
    </div>
    <div class="table__footer px-3 py-3">
      <a
        href="#"
        class="table__footer--btn block rounded text-center w-full text-text-primary p-1 text-sm"
        >View All Blocks</a
      >
    </div>
  </div>
</template>

<script setup>
import { timeSince } from "../../js/utils";
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  headerText: {
    type: String,
    default: () => "Header",
  },
  iconText: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.table {
  border: 1px solid #e5e7eb;
  &__header {
    color: #4a4f55;
  }
  &__body {
    &--label {
      position: relative;
      &:before {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        top: 0;
        left: 0;
        background-color: #fff;
        transform: translate(-50%, 20%) rotate(45deg);
      }
    }
  }
  &__footer {
    border-top: 1px solid var(--border-color);
    &--btn {
      background-color: rgba(52, 152, 219, 0.1);
      transition: 0.5s all ease;
      &:hover {
        color: #fff;
        background: #3498db;
        box-shadow: 0 4px 11px rgb(52 152 219 / 35%);
      }
    }
  }
}
</style>
