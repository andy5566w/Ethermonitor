<template>
  <a
    href="#"
    class="etherBtn block rounded text-center w-full text-text-primary p-1 text-sm"
    ><slot
  /></a>
</template>

<script setup></script>

<style scoped lang="scss">
.etherBtn {
  background-color: rgba(52, 152, 219, 0.1);
  transition: 0.5s all ease;
  &:hover {
    color: #fff;
    background: #3498db;
    box-shadow: 0 4px 11px rgb(52 152 219 / 35%);
  }
}
</style>
