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
                class="tabs relative hover:text-text-primary"
                :href="item.href"
                :class="[
                  index === activeIndex ? 'text-active' : 'text-gray-400',
                  'px-3 py-2 rounded-md text-sm font-medium',
                ]"
                >{{ item.name }}
                <nav
                  v-if="item.lists"
                  class="tabs__nav px-3 py-1 bg-white border-t-2 border-text-primary rounded-b shadow"
                >
                  <ul>
                    <li
                      v-for="({ name, isDivided }, index) in item.lists"
                      :key="index"
                      class="text-gray-400 hover:text-text-primary py-3 px-5"
                      :class="{ 'border-b': isDivided }"
                    >
                      <span class="whitespace-nowrap"> {{ name }}</span>
                    </li>
                  </ul>
                </nav>
              </a>
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
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Blockchain",
    href: "#",
    lists: [
      { name: "View Txns" },
      { name: "View Pending Txns" },
      { name: "View Contract Internal Txns", isDivided: true },
      { name: "View Blocks" },
      { name: "Forked Blocks (Reorgs)" },
      { name: "View Uncles", isDivided: true },
      { name: "Top Accounts" },
      { name: "Verified Contracts" },
    ],
  },
  {
    name: "Token",
    href: "#",
    lists: [
      { name: "ERC20 Top Tokens" },
      { name: "View ERC20 Transfers", isDivided: true },
      { name: "ERC721 Top Tokens" },
      { name: "View ERC721 Transfers" },
      { name: "View ERC721 Transfers", isDivided: true },
      { name: "ERC1155 Top Tokens" },
      { name: "View ERC1155 Transfers " },
    ],
  },
  {
    name: "Resource",
    href: "#",
    lists: [
      { name: "Charts & Stats" },
      { name: "Top Statistics" },
      { name: "Developer APIs", isDivided: true },
      { name: "Ethereum Directory" },
    ],
  },
  { name: "More", href: "#" },
]);
let activeIndex = ref(0);
let toggleMenu = ref(false);
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

.tabs {
  &__nav {
    position: absolute;
    top: 100%;
    left: 0;
    transition: all 0.2s ease-in;
    opacity: 0;
    z-index: -1;
    transform: translateY(10%);
  }
  &:hover &__nav {
    transform: translateY(2%);
    opacity: 1;
    z-index: 1;
  }
}
</style>
