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
            Transaction Hash:
          </span>
          <span class="flex-grow flex space-x-2 items-center">
            <span
              >0x71609b1e9ad89be8587aaa5969b00bcdbeff677372113d93374837c06290a909</span
            >
          </span>
        </div>

        <!--   Status:     -->
        <div class="flex py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip text="The status of the transaction.">
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Status:
          </span>
          <span class="flex-grow">
            <span class="label-success inline-flex items-center"
              ><CheckCircleIcon class="w-5 inline-block mr-2" /><b
                >Success</b
              ></span
            >
          </span>
        </div>

        <!--        Transactions-->
        <div class="flex py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="Number of the block in which the transaction is recorded. Block confirmations indicate how many blocks have been added since the transaction was mined."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Block:
          </span>
          <span class="flex-grow"
            ><a
              href="#"
              class="text-text-primary hover:text-text-primary-hover mr-4"
              >15125326</a
            >
            <span class="block-label">58 Block Confirmations</span>
          </span>
        </div>

        <!--        Timestamp:-->
        <div class="flex py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip text="The date and time at which a transaction is mined.">
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Timestamp:
          </span>
          <span class="flex-grow">
            13 mins ago (Jul-12-2022 03:04:58 AM +UTC)| Confirmed within 30 secs
          </span>
        </div>

        <hr class="hr-space" />

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
              >ridaz.eth</a
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
              >0x94fb0ab11e9af58070cd1b12c7ffcf1eb88d9d7d</a
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
            <span class="bg-[rgba(119,131,143,.1)] px-2 py-1">0.01 Ether </span>
            ($10.84)</span
          >
        </div>

        <!--        Transaction Fee:-->
        <div class="flex py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="Amount paid to the miner for processing the transaction."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Transaction Fee:
          </span>
          <span class="flex-grow">0.000615562010133 Ether ($0.67)</span>
        </div>

        <hr class="hr-space" />

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
          <span class="flex-grow">
            0.000000029312476673 Ether (29.312476673 Gwei)</span
          >
        </div>

        <hr class="hr-space" />
        <!--        ----- scroll ---- -->
        <div class="collapse" :class="{ active: isShowMore }">
          <!--        Gas Limit & Usage by Txn:-->
          <div class="flex py-4">
            <span class="flex-[0_0_25%] flex">
              <Tooltip
                text="Maximum amount of gas allocated for the transaction & the amount eventually used. Normal ETH transfers involve 21,000 gas units while contracts involve higher values."
              >
                <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
              </Tooltip>
              Gas Limit & Usage by Txn:
            </span>
            <span class="flex-grow">21,000 | 21,000 (100%)</span>
          </div>

          <!--        Gas Fees:-->
          <div class="flex py-4">
            <span class="flex-[0_0_25%] flex">
              <Tooltip
                text="Base Fee refers to the network Base Fee at the time of the block, while Max Fee & Max Priority Fee refer to the max amount a user is willing to pay for their tx & to give to the miner respectively."
              >
                <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
              </Tooltip>
              Gas Fees:
            </span>
            <span class="flex-grow">
              <span class="text-text-secondary">Base:</span> 27.812476673 Gwei
              <b class="text-text-secondary mx-2">|</b>
              <span class="text-text-secondary">Max:</span> 39.890703746 Gwei
              <b class="text-text-secondary mx-2">|</b>
              <span class="text-text-secondary">Max Priority:</span> 1.5
              Gwei</span
            >
          </div>

          <!--        Burnt & Txn Savings Fees:-->
          <div class="flex py-4">
            <span class="flex-[0_0_25%] flex">
              <Tooltip
                text="Post-London Upgrade, this represents the part of the tx fee that is burnt: baseFeePerGas * gasUsed"
              >
                <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
              </Tooltip>
              Burnt & Txn Savings Fees:
            </span>
            <span class="flex-grow">
              <button class="bg-[rgba(219,154,4,.1)] py-1 px-4 rounded-lg mr-1">
                Burnt: 0.000584062010133 Ether ($0.63)
              </button>
              <button class="bg-[rgba(0,201,167,.1)] py-1 px-4 rounded-lg">
                Txn Savings: 0.000222142768533 Ether ($0.24)
              </button>
            </span>
          </div>

          <!--       Others:-->
          <div class="flex py-4">
            <span class="flex-[0_0_25%] flex">
              <Tooltip
                text="Any data that can be included by the miner in the block."
              >
                <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
              </Tooltip>
              Others:
            </span>
            <span class="flex-grow"
              ><span class="bg-[rgba(119,131,143,.1)] px-2 py-1 mr-2">
                Txn Type: 2 (EIP-1559) </span
              ><span class="bg-[rgba(119,131,143,.1)] px-2 py-1">
                Nonce: 1678
              </span></span
            >
          </div>

          <!--        Input Data:-->
          <div class="flex py-4">
            <span class="flex-[0_0_25%] flex">
              <Tooltip
                text="The hash of the block header of the current block."
              >
                <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
              </Tooltip>
              Input Data:
            </span>
            <span class="flex-grow">
              <textarea
                class="border w-full bg-label-second-color rounded"
                rows="3"
              ></textarea>
            </span>
          </div>
        </div>
      </div>

      <div class="table__footer py-4">
        <a
          href="#"
          @click.prevent="isShowMore = !isShowMore"
          class="text-text-primary hover:text-text-primary-hover text-base w-full inline-block"
          >Click to see {{ isShowMore ? "more" : "less" }}
          <ArrowSmDownIcon v-if="isShowMore" class="w-5 inline-block" />
          <ArrowSmUpIcon v-else class="w-5 inline-block" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Tooltip from "../../components/Tooltip.vue";
import {
  QuestionMarkCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowSmUpIcon,
  ArrowSmDownIcon,
  CheckCircleIcon,
} from "@heroicons/vue/outline";
import EtherButton from "../../components/button/EtherButton.vue";
import MenuButton from "../../components/button/MenuButton.vue";

const isShowMore = ref(false);
const selectedTabIndex = ref(0);
const tabs = [
  {
    name: "Overview",
  },
  { name: "State" },
  { name: "comments" },
];

const menuButtonLists = ["Buy", "Exchange", "Earn", "Gaming"];
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
