<template>
  <div class="table rounded bg-white">
    <table>
      <thead>
        <tr>
          <td v-for="({ name }, index) in header" :key="index">{{ name }}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td v-for="({ name }, index) in header" :key="index">
            <slot :name="name">{{ item[name] }}</slot>
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

<style scoped>
td {
  padding: 0 3rem;
}
</style>
