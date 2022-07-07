<template>
  <header class="container m-auto">
    <Disclosure as="nav" class="bg-white" v-slot="{ open }">
      <div class="max-w-screen-2xl">
        <div class="flex items-center justify-between py-3">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="h-8 w-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <p class="ml-2 text-2xl font-semibold">Etherscan</p>
          </div>

          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a
                v-for="(item, index) in navigation"
                :key="item.name"
                @click.prevent="activeIndex = index"
                :href="item.href"
                :class="[
                  index === activeIndex
                    ? 'text-active'
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium',
                ]"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  </header>
</template>

<script setup>
import { Disclosure } from "@headlessui/vue";
import { ref, reactive } from "vue";

const navigation = reactive([
  { name: "Home", href: "#" },
  { name: "Blockchain", href: "#" },
  { name: "Token", href: "#" },
  { name: "Resource", href: "#" },
  { name: "More", href: "#" },
]);
let activeIndex = ref(0);
</script>

<style scoped lang="scss">
.text-active {
  color: var(--primary-text-color);
}
</style>
