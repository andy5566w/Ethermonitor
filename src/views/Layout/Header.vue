<template>
  <header class="container px-5 sm:m-auto relative">
    <Disclosure as="nav" class="bg-white" v-slot="{ open }">
      <div class="max-w-screen-2xl">
        <div
          class="flex items-center justify-between py-3 flex-wrap lg:flex-nowrap"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="h-8 w-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <p class="ml-2 text-2xl font-semibold">Etherscan</p>
          </div>

          <div class="hidden sm:block w-full lg:w-auto">
            <div class="flex items-baseline space-x-4 lg:ml-10 mt-2 lg:mt-0">
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

          <div class="block sm:hidden">
            <MenuIcon
              v-if="!toggleMenu"
              @click="toggleMenu = true"
              class="w-6 text-header-menu-color cursor-pointer"
            />
            <XIcon
              v-else
              @click="toggleMenu = false"
              class="w-6 text-header-menu-color cursor-pointer"
            />
            <div
              class="w-full menu-drop bg-white px-5"
              :class="[toggleMenu ? 'active' : '']"
            >
              <ul>
                <li v-for="{ name } in navigation" :key="name">
                  <a
                    href="#"
                    class="text-text-secondary hover:text-text-primary transition w-full block py-3"
                    >{{ name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  </header>
</template>

<script setup>
import { Disclosure } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/solid";
import { ref, reactive } from "vue";

const navigation = reactive([
  { name: "Home", href: "#" },
  { name: "Blockchain", href: "#" },
  { name: "Token", href: "#" },
  { name: "Resource", href: "#" },
  { name: "More", href: "#" },
]);
let activeIndex = ref(0);
const toggleMenu = ref(false);
</script>

<style scoped lang="scss">
.text-active {
  color: var(--primary-text-color);
}

.menu-drop {
  position: absolute;
  top: 90%;
  left: 0;
  width: 100vw;
  transition: all 0.2s ease;
  opacity: 0;
  transform: translateY(-100%);
  pointer-events: none;
  z-index: -1;

  &.active {
    z-index: 1;
    pointer-events: initial;
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
