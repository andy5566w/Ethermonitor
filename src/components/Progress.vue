<template>
  <div class="progress">
    <div class="progress-value"></div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  maximum: {
    type: Number,
    required: true,
  },
  valueColor: {
    type: String,
    default: () => "#3498db",
  },
});
const percentages = computed(() => (props.value / props.maximum) * 100 + "%");
</script>

<style scoped lang="scss">
.progress {
  background-color: #e7eaf3;
  width: 100%;
  height: 2px;
  position: relative;
  .progress-value {
    position: absolute;
    top: 0;
    left: 0;
    height: 2px;
    background-color: v-bind("props.valueColor");
    width: v-bind(percentages);
  }
}
</style>
