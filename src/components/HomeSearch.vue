<template>
  <section class="HomeSearch h-15 flex items-center py-16">
    <div class="flex container mx-auto pb-8">
      <div class="flex-grow pr-14">
        <h1 class="text-white font-normal text-xl text-start mb-3">
          The Ethereum Blockchain Explorer
        </h1>
        <SearchBar
          v-model:select-type="selectType"
          v-model:input-text="inputText"
        />
        <p class="text-white opacity-90 text-sm font-bold text-start mt-5">
          Sponsored: Find the Next Crypto Gem on KuCoin. Sign up to Claim $500
          Welcome Bonus!
        </p>
      </div>
      <div class="bg-gray-300 HomeSearch__ad">ad</div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import SearchBar from "../components/SearchBar.vue";
const selectType = ref("All Filters");
const inputText = ref("");
</script>

<style scoped lang="scss">
.HomeSearch {
  width: 100vw;
  background-color: var(--primary-color);

  &__ad {
    width: 45%;
  }
}
</style>
