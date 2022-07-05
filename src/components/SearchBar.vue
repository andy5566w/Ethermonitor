<template>
  <div class="flex w-full">
    <select
      :value="selectType"
      @change="$emit('update:selectType', $event.target.value)"
      class="px-5 py-2 rounded-l-lg focus:outline-none"
    >
      <option selected value="All Filters">All Filters</option>
      <option value="Address">Address</option>
      <option value="Token">Token</option>
      <option value="Name Tags">Name Tags</option>
      <option value="Label">Label</option>
      <option value="Websites">Websites</option>
    </select>
    <input
      type="text"
      @input="$emit('update:inputText', $event.target.value)"
      class="focus:outline-none w-full flex-grow pl-2"
      placeholder="Search by Address / Txn Hash / Block / Token / Ens"
    />
    <button class="w-12 -ml-2 rounded-r-lg bg-text-primary text-white">
      <SearchIcon class="w-4 mx-auto stroke-[3px]" />
    </button>
  </div>
</template>

<script setup>
import { SearchIcon } from "@heroicons/vue/outline";
const props = defineProps({
  selectType: {
    type: String,
    default: () => "All Filters",
  },
  inputText: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["update:selectType", "update:inputText"]);
</script>

<style scoped></style>
