<template>
  <div class="footer px-14 sm:px-5 py-7">
    <div
      class="footer__info container mx-auto flex justify-between py-3 flex-wrap sm:flex-nowrap"
    >
      <div class="flex-[0_0_100%] sm:flex-[0_0_25%]">
        <div class="flex items-center mb-4">
          <HomeIcon class="w-8 mr-2" />
          <span class="text-xl">Powered by Ethereum</span>
        </div>
        <p class="leading-7 mb-3">
          Etherscan is a Block Explorer and Analytics Platform for Ethereum, a
          decentralized smart contracts platform.
        </p>
        <div class="flex">
          <button class="btn-xss flex items-center bg-white mr-2">
            <CogIcon class="w-5" /> Preferences
          </button>
          <button class="btn-xss bg-white"><MoonIcon class="w-5" /></button>
        </div>
      </div>
      <div
        v-for="({ title, lists }, index) in footer_lists"
        :key="index"
        class="flex-[0_0_48%] sm:flex-[0_0_16.6667%] mt-8 sm:mt-0"
      >
        <h4 class="mb-3 pb-2 font-semibold">{{ title }}</h4>
        <ul>
          <li v-for="list in lists" :key="list">
            <a href="#" class="footer__info--link py-1 w-full inline-block">{{
              upperFirst(list)
            }}</a>
          </li>
        </ul>
      </div>
    </div>

    <hr class="hr-space container mx-auto" />

    <div
      class="container mx-auto flex justify-between flex-wrap sm:flex-nowrap"
    >
      <span class="flex items-center w-full sm:w-auto my-3 sm:my-0"
        >Etherscan © 2022 (C1) | Donate <HeartIcon class="w-5 ml-2"
      /></span>
      <div class="flex items-center space-x-2">
        <AcademicCapIcon class="w-9 h-9 rounded-full btn-xss" />
        <AnnotationIcon class="w-9 h-9 rounded-full btn-xss" />
        <CheckIcon class="w-9 h-9 rounded-full btn-xss" />
        <EmojiHappyIcon class="w-9 h-9 rounded-full btn-xss" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  HomeIcon,
  CogIcon,
  MoonIcon,
  HeartIcon,
  AcademicCapIcon,
  AnnotationIcon,
  CheckIcon,
  EmojiHappyIcon,
} from "@heroicons/vue/solid";
import { upperFirst } from "lodash";

const footer_lists = [
  {
    title: "Company",
    lists: [
      "About Us",
      "Contact Us",
      "brand assets",
      "careers",
      "terms of service",
      "bug bounty",
    ],
  },
  {
    title: "Resource",
    lists: [
      "API Documentation",
      "knowledge base",
      "newsletter",
      "network status",
      "disqus comments",
    ],
  },
  {
    title: "Products & Service",
    lists: [
      "advertise",
      "explorer-as-a-Service (EaaS)",
      "developer APIs",
      "blockscan",
      "beaconScan",
    ],
  },
];
</script>

<style scoped lang="scss">
.footer {
  background-color: var(--primary-color);
  color: #fff;

  &__info {
    &--link {
      color: hsla(0, 0%, 100%, 0.7);
      transition: all 0.2s ease;
      &:hover {
        color: #fff;
      }
    }
  }

  h4 {
    border-bottom: 1px solid var(--secondary-text-color);
  }
}

.btn-xss {
  font-size: 0.65625rem;
  padding: 0.3rem 0.6rem;
  color: #f8f9fa;
  background: rgba(248, 249, 250, 0.1);
  border-color: transparent;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #1e2022;
    background: #f8f9fa;
    box-shadow: 0 4px 11px rgb(248 249 250 / 35%);
  }
}
</style>
