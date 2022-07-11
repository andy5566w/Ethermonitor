<template>
  <div
    @mouseenter.self="handleMouseEnter"
    @mouseleave.self="handleMouseLeave"
    class="relative"
  >
    <slot></slot>
    <p
      class="text border text-sm min-w-[150px]"
      :class="{ active: isShowTooltip }"
    >
      {{ text }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  text: {
    type: String,
    required: true,
  },
});
const isShowTooltip = ref(false);

const handleMouseEnter = () => {
  isShowTooltip.value = true;
};
const handleMouseLeave = () => {
  isShowTooltip.value = false;
};
</script>

<style scoped lang="scss">
.text {
  position: absolute;
  padding: 10px;
  background-color: #fff;
  bottom: 100%;
  transform: translate(-50%, -2%);
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease;

  &.active {
    pointer-events: initial;
    opacity: 1;
  }

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateY(-50%) rotate(45deg);
    height: 10px;
    width: 10px;
    background-color: #fff;
    border-right: 1px solid #e5e7eb;
    border-bottom: 1px solid #e5e7eb;
  }
}
</style>
