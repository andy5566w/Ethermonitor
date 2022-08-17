<template>
  <section class="block container mx-auto p-5 pb-16">
    <h1 class="text-[1.3125rem] mb-3">
      Block
      <span class="text-[80%] text-text-secondary">#{{ route.params.id }}</span>
    </h1>
    <div class="table round bg-white w-full border rounded px-5">
      <div class="table__tabs border-b -ml-5 -mr-5">
        <button
          class="table__tabs--btn text-text-secondary hover:text-text-primary font-semibold px-5 py-3 active"
        >
          Overview
        </button>
        <button
          class="table__tabs--btn text-text-secondary hover:text-text-primary font-semibold px-5 py-3"
        >
          Comment
        </button>
      </div>

      <div class="table__row">
        <!--   Block Height:     -->
        <div class="flex border-b py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="Also known as Block Number. The block height, which indicates the length of the blockchain, increases after the addition of the new block."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Block Number:
          </span>
          <span class="flex-grow flex space-x-2 items-center">
            <span class="font-semibold">{{ block.number }}</span>
            <EtherButton class="w-6" @click="navigateBlock(false)">
              <ChevronLeftIcon />
            </EtherButton>
            <EtherButton class="w-6" @click="navigateBlock()">
              <ChevronRightIcon /> </EtherButton
          ></span>
        </div>

        <!--   Block hash:     -->
        <div class="flex border-b py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip text="The date and time at which a block is mined.">
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Block Hash:
          </span>
          <span class="flex-grow">
            <span> {{ block.hash }}</span>
          </span>
        </div>

        <!--   Timestamp:     -->
        <div class="flex border-b py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip text="The date and time at which a block is mined.">
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Timestamp:
          </span>
          <span class="flex-grow"
            ><ClockIcon class="w-5 inline-block mr-2" />
            <span> {{ calculateAge(block.timestamp) }}</span>
          </span>
        </div>

        <!--        Transactions-->
        <div class="flex border-b py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="The number of transactions in the block. Internal transaction is transactions as a result of contract execution that involves Ether value."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Transactions:
          </span>
          <span class="flex-grow">
            <EtherButton class="inline-block w-auto px-3">
              {{
                Array.isArray(block.transactions)
                  ? block.transactions.length
                  : 0
              }}
              transactions</EtherButton
            >
            <!--            and-->
            <!--            <EtherButton class="inline-block w-auto px-3">-->
            <!--              52 contract internal transactions</EtherButton-->
            <!--            >-->
            in this block
          </span>
        </div>

        <!--        Mined by:-->
        <div class="flex border-b py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="Miner who successfully include the block onto the blockchain."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Mined by:
          </span>
          <span class="flex-grow">
            <a
              href="#"
              class="text-text-primary hover:text-text-primary-hover"
              >{{ block.miner }}</a
            >
          </span>
        </div>

        <!--        Difficulty:-->
        <div class="flex border-b py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="The amount of effort required to mine a new block. The difficulty algorithm may adjust according to time."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Difficulty:
          </span>
          <span class="flex-grow">{{ block.difficulty }}</span>
        </div>

        <!--        Size:-->
        <div class="flex border-b py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="The block size is actually determined by the block's gas limit."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Size:
          </span>
          <span class="flex-grow"> {{ getSize(block.size) }}</span>
        </div>

        <!--        Gas Used:-->
        <div class="flex border-b py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="The total gas used in the block and its percentage of gas filled in the block."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Gas Used:
          </span>
          <span class="flex-grow"> {{ numberWithCommas(block.gasUsed) }}</span>
        </div>

        <!--        Gas Limit:-->
        <div class="flex border-b py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="Total gas limit provided by all transactions in the block."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Gas Limit:
          </span>
          <span class="flex-grow"> {{ numberWithCommas(block.gasLimit) }}</span>
        </div>

        <!--        ----- scroll ---- -->
        <div class="collapse" :class="{ active: isShowMore }">
          <!--        Extra Data:-->
          <div class="flex border-b py-4">
            <span class="flex-[0_0_25%] flex">
              <Tooltip
                text="Any data that can be included by the miner in the block."
              >
                <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
              </Tooltip>
              Extra Data:
            </span>
            <p class="break-all">{{ block.extraData }}</p>
          </div>

          <!--        Uncle Hash:-->
          <div class="flex border-b py-4">
            <span class="flex-[0_0_25%] flex">
              <Tooltip
                text="The hash of the block header of the current block."
              >
                <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
              </Tooltip>
              Uncle Hash:
            </span>
            <span class="flex-grow"> {{ block.sha3Uncles }}</span>
          </div>

          <!--        Parent Hash:-->
          <div class="flex border-b py-4">
            <span class="flex-[0_0_25%] flex">
              <Tooltip
                text="The hash of the block from which this block was generated, also known as its parent block."
              >
                <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
              </Tooltip>
              Parent Hash:
            </span>
            <span class="flex-grow">
              {{ block.parentHash }}
            </span>
          </div>

          <!--        StateRoot:-->
          <div class="flex border-b py-4">
            <span class="flex-[0_0_25%] flex">
              <Tooltip text="The root of the state trie">
                <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
              </Tooltip>
              StateRoot:
            </span>
            <span class="flex-grow">{{ block.stateRoot }} </span>
          </div>

          <!--        Nonce:-->
          <div class="flex border-b py-4">
            <span class="flex-[0_0_25%] flex">
              <Tooltip
                text="Block nonce is a value used during mining to demonstrate proof of work for a block."
              >
                <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
              </Tooltip>
              Nonce:
            </span>
            <span class="flex-grow">{{ block.nonce }} </span>
          </div>

          <!--        Number of Uncle Blocks:-->
          <div class="flex border-b py-4">
            <span class="flex-[0_0_25%] flex">
              <Tooltip
                text="Block nonce is a value used during mining to demonstrate proof of work for a block."
              >
                <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
              </Tooltip>
              Number of uncle blocks:
            </span>
            <span class="flex-grow"
              >{{ Array.isArray(block.uncles) ? block.uncles.length : 0 }}
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
import {
  calculateAge,
  getSize,
  numberWithCommas,
} from "../../utils/tableUtils";
import { ref, watchEffect } from "vue";
import Tooltip from "../../components/Tooltip.vue";
import {
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/vue/outline";
import EtherButton from "../../components/button/EtherButton.vue";
import { useRoute, useRouter } from "vue-router";
import { fetchBlock } from "../../server/web3";

const route = useRoute();
const router = useRouter();
const isShowMore = ref(false);
const block = ref({});

block.value = fetchBlock(route.params.id);
watchEffect(async () => {
  block.value = await fetchBlock(route.params.id);
  if (block.value == null) {
    alert("block don't exist");
  }
});

const navigateBlock = (isIncrement = true) => {
  const blockId = isIncrement
    ? +block.value.number + 1
    : block.value.number - 1;
  router.push({ name: "singlePageOfBlock", params: { id: blockId } });
};
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
      height: 300px;
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
