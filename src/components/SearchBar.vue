<template>
  <div class="flex w-full">
    <div class="select flex-[0_0_20%]">
      <select
        :value="selectType"
        @change="$emit('update:selectType', $event.target.value)"
        class="select px-4 py-2 rounded-l-lg focus:outline-none h-full w-full"
      >
        <option selected value="All Filters">All Filters</option>
        <option value="Address">Address</option>
        <option value="Token">Token</option>
        <option value="Name Tags">Name Tags</option>
        <option value="Label">Label</option>
        <option value="Websites">Websites</option>
      </select>
    </div>
    <input
      type="text"
      @input="$emit('update:inputText', $event.target.value)"
      class="focus:outline-none w-full flex-grow pl-2 py-3"
      placeholder="Search by Address / Txn Hash / Block / Token / Ens"
    />
    <button class="w-14 -ml-2 rounded-r-lg bg-text-primary text-white">
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

<style scoped lang="scss">
.select {
  border-right: 1px solid #e5e7eb;
  appearance: none;
  position: relative;
  &:after {
    content: "";
    display: block;
    height: 5px;
    width: 5px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(-50%, -85%) rotate(45deg);
    border-right: 1px solid #77838f;
    border-bottom: 1px solid #77838f;
  }
}
</style>
