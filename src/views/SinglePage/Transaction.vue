<template>
  <section class="block container mx-auto p-5 pb-16">
    <div class="flex items-center">
      <h1 class="text-[1.3125rem] flex items-center mr-auto">
        Transaction Details
        <EtherButton class="w-6 mx-2">
          <ChevronLeftIcon />
        </EtherButton>
        <EtherButton class="w-6"> <ChevronRightIcon /> </EtherButton>
      </h1>

      <MenuButton v-for="menu in menuButtonLists" class="mr-2" :key="menu">{{
        menu
      }}</MenuButton>
    </div>
    <hr class="hr-space" />

    <p class="text-text-secondary text-md pb-3">
      <b>Featured:</b> Curious on Ethereum's hottest 🔥 trading pairs? View top
      pairs and details with
      <a
        href="#"
        class="text-text-primary hover:text-text-primary-hover font-semibold"
        >DEX Trading Pairs!</a
      >
    </p>

    <div class="table round bg-white w-full border rounded px-5">
      <div class="table__tabs border-b -ml-5 -mr-5">
        <button
          v-for="({ name }, index) in tabs"
          :key="name"
          :class="{ active: selectedTabIndex === index }"
          @click="selectedTabIndex = index"
          class="table__tabs--btn text-text-secondary hover:text-text-primary font-semibold px-5 py-3"
        >
          {{ name }}
        </button>
      </div>

      <div class="table__row">
        <!--   Transaction Hash:     -->
        <div class="flex py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="A TxHash or transaction hash is a unique 66-character identifier that is generated whenever a transaction is executed."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Transaction Id:
          </span>
          <span class="flex-grow flex space-x-2 items-center">
            <span>{{ route.params.id }}</span>
          </span>
        </div>

        <!--        Block-->
        <div class="flex py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="Number of the block in which the transaction is recorded. Block confirmations indicate how many blocks have been added since the transaction was mined."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Block Number:
          </span>
          <span class="flex-grow">
            {{ tx.blockNumber || "pending" }}
          </span>
        </div>

        <!--        Block Hash-->
        <div class="flex py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="Number of the block in which the transaction is recorded. Block confirmations indicate how many blocks have been added since the transaction was mined."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Block Hash:
          </span>
          <span class="flex-grow">
            <span class="flex-grow flex space-x-2 items-center">{{
              tx.blockHash || "pending"
            }}</span>
          </span>
        </div>

        <!--        From:-->
        <div class="flex py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip text="The sending party of the transaction.">
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            From:
          </span>
          <span class="flex-grow">
            <a
              href="#"
              class="text-text-primary hover:text-text-primary-hover mr-4"
              >{{ tx.from }}</a
            >
          </span>
        </div>

        <!--        To:-->
        <div class="flex py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="The receiving party of the transaction (could be a contract address)."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            To:
          </span>
          <span class="flex-grow">
            <a
              href="#"
              class="text-text-primary hover:text-text-primary-hover mr-4"
              >{{ tx.to }}</a
            >
          </span>
        </div>

        <hr class="hr-space" />

        <!--        Value:-->
        <div class="flex py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="The value being transacted in Ether and fiat value. Note: You can click the fiat value (if available) to see historical value at the time of transaction."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Value:
          </span>
          <span class="flex-grow">
            <span class="bg-[rgba(119,131,143,.1)] px-2 py-1"
              >{{ tx.value.c[0] / 10000 }} Ether
            </span>
          </span>
        </div>

        <!--        Gas Price:-->
        <div class="flex py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="Cost per unit of gas specified for the transaction, in Ether and Gwei. The higher the gas price the higher chance of getting included in a block."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Gas Price:
          </span>
          <span class="flex-grow"> {{ gasPriceFormat }} Ether </span>
        </div>

        <!--        Gas Used:-->
        <div class="flex py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="Base Fee refers to the network Base Fee at the time of the block, while Max Fee & Max Priority Fee refer to the max amount a user is willing to pay for their tx & to give to the miner respectively."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Gas Used:
          </span>
          <span class="flex-grow"> {{ tx.gas }}</span>
        </div>

        <!--        TX price:-->
        <div class="flex py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="Base Fee refers to the network Base Fee at the time of the block, while Max Fee & Max Priority Fee refer to the max amount a user is willing to pay for their tx & to give to the miner respectively."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Transaction price:
          </span>
          <span class="flex-grow"> {{ txPrice }}</span>
        </div>

        <!--        nonce:-->
        <div class="flex py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="Base Fee refers to the network Base Fee at the time of the block, while Max Fee & Max Priority Fee refer to the max amount a user is willing to pay for their tx & to give to the miner respectively."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Number of transactions made by the sender prior to this one
          </span>
          <span class="flex-grow"> {{ tx.nonce }}</span>
        </div>

        <!--        Input:-->
        <div class="flex py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="Cost per unit of gas specified for the transaction, in Ether and Gwei. The higher the gas price the higher chance of getting included in a block."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Data:
          </span>
          <textarea
            name="text"
            id=""
            cols="30"
            rows="10"
            :value="tx.input"
            readonly
            class="focus:outline-none"
          ></textarea>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watchEffect, computed } from "vue";
import Tooltip from "../../components/Tooltip.vue";
import {
  QuestionMarkCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/vue/outline";
import EtherButton from "../../components/button/EtherButton.vue";
import MenuButton from "../../components/button/MenuButton.vue";
import { useRoute } from "vue-router";
import { fetchTx } from "../../server/web3";
import Web3 from "web3";
const web3 = new Web3();
const route = useRoute();
const tx = ref({
  value: {
    c: [0],
  },
});
let selectedTabIndex = ref(0);
const tabs = [
  {
    name: "Overview",
  },
  { name: "State" },
  { name: "comments" },
];

const menuButtonLists = ["Buy", "Exchange", "Earn", "Gaming"];

watchEffect(async () => {
  const id = route.params.id;
  tx.value = await fetchTx(id);
  if (!tx.value) {
    alert("tx is empty");
  }
  // console.log("mounted fetchTxByBlockHash: ", tx.value);
});

const gasPriceFormat = computed(() => {
  return tx.value.gasPrice ? web3.fromWei(tx.value.gasPrice, "ether") : 0;
});

const txPrice = computed(() => {
  if (!tx.value.gasPrice || !tx.value.gas) return 0;
  return web3.fromWei(tx.value.gasPrice * tx.value.gas, "ether");
});
</script>

<style scoped lang="scss">
.table {
  &__tabs {
    &--btn {
      &.active {
        position: relative;
        color: var(--primary-text-color);
        &:before {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: var(--primary-text-color);
        }
      }
    }
  }

  &__row {
    z-index: 1;
    position: relative;
    .collapse {
      transition: all 0.2s ease;
      transform: translateY(0%);
      opacity: 1;
      height: 284px;
      &.active {
        opacity: 0;
        pointer-events: none;
        transform: translateY(-100%);
        height: 0;
      }
    }
  }
}
</style>
