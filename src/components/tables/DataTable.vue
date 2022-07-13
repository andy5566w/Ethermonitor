<template>
  <div class="rounded bg-white">
    <table class="table w-full">
      <thead>
        <tr class="table__header border-t border-b">
          <td
            v-for="({ text, className }, index) in header"
            class="py-2 px-3"
            :class="className"
            :key="index"
          >
            <span class="font-semibold text-lg">
              {{ text }}
            </span>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td
            v-for="({ value }, index) in header"
            :key="index"
            class="p-3 border-b"
          >
            <slot
              :name="value"
              :item="item"
              :value="item[value]"
              :index="index"
              >{{ item[value] }}</slot
            >
          </td>
        </tr>
      </tbody>
    </table>

    <slot
      name="table-footer"
      :items="items"
      :length="items.length"
      :header="header"
    >
      <div class="text-text-secondary flex items-center pt-4 pb-8 px-2">
        <div class="mr-auto">
          Show
          <select class="focus:outline-none border p-1 rounded">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          Records
        </div>

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
    </slot>
  </div>
</template>

<script setup>
import EtherButton from "../../components/button/EtherButton.vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/outline";
defineProps({
  items: {
    type: Array,
    required: true,
  },
  header: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.table {
  border-collapse: collapse;
  &__header {
    color: #6c757e;
    background-color: #f8fafd;
    border-color: #e7eaf3;
  }

  tr {
    &:hover {
      color: #1e2022;
      background-color: rgba(231, 234, 243, 0.4);
    }
  }
}
</style>
