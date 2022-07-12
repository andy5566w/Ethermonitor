<template>
  <button class="btn rounded flex item-center px-2 py-1">
    <slot>Default</slot>
    <ChevronDownIcon class="w-5 ml-2 inline-block" />
  </button>
</template>

<script setup>
import { ChevronDownIcon } from "@heroicons/vue/solid";
</script>

<style scoped lang="scss">
.btn {
  color: #fff;
  background-color: #3498db;
  border-color: #3498db;
  font-size: 0.72rem;
  font-weight: 400;
  transition: all 0.2s ease-in;

  &:hover {
    color: #fff;
    background-color: #2384c6;
    border-color: #217dbb;
    box-shadow: 0 4px 11px rgb(52 152 219 / 35%);
  }
}
</style>
