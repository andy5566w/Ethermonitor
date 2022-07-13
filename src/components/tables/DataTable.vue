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
            class="py-2 px-3"
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
  </div>
</template>

<script setup>
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
