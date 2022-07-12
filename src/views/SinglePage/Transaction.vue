<template>
  <section class="block container mx-auto p-5 pb-16">
    <h1 class="text-[1.3125rem] mb-3 flex items-center">
      Transaction Details
      <EtherButton class="w-6 mx-2">
        <ChevronLeftIcon />
      </EtherButton>
      <EtherButton class="w-6"> <ChevronRightIcon /> </EtherButton>
    </h1>

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
        <!--   Block Height:     -->
        <div class="flex border-b py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="Also known as Block Number. The block height, which indicates the length of the blockchain, increases after the addition of the new block."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Block Height:
          </span>
          <span class="flex-grow flex space-x-2 items-center">
            <span class="font-semibold">15120169</span>
            <EtherButton class="w-6">
              <ChevronLeftIcon />
            </EtherButton>
            <EtherButton class="w-6"> <ChevronRightIcon /> </EtherButton
          ></span>
        </div>

        <!--   Block Height:     -->
        <div class="flex border-b py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip text="The date and time at which a block is mined.">
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Timestamp:
          </span>
          <span class="flex-grow"
            ><ClockIcon class="w-5 inline-block mr-2" />
            <span> {{ timeSince(Date.now() - 21327) }}</span>
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
              121 transactions</EtherButton
            >
            and
            <EtherButton class="inline-block w-auto px-3">
              52 contract internal transactions</EtherButton
            >
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
            <span
              ><a
                href="#"
                class="text-text-primary hover:text-text-primary-hover"
                >0x829bd824b016326a401d083b33d092293333a830</a
              >
              <span class="font-semibold mx-2">(F2Pool Old) </span>
              in 31 secs</span
            >
          </span>
        </div>

        <!--        Block Reward:-->
        <div class="flex border-b py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="For each block, the miner is rewarded with a finite amount of Ether on top of the fees paid for all transactions in the block."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Block Reward:
          </span>
          <span class="flex-grow">
            2.062546738497306487 Ether (2 + 0.297243738094269589 -
            0.234696999596963102)
          </span>
        </div>

        <!--        Uncles Reward:-->
        <div class="flex border-b py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="An uncle block has a significantly lower reward than a normal block. Uncles reward is valid but rejected as it is not on the longest chain which is the working mechanism of the blockchain. Uncle block is important in Ethereum as it secures the blockchain."
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Uncles Reward:
          </span>
          <span class="flex-grow">0 </span>
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
          <span class="flex-grow">11,401,870,790,225,199</span>
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
          <span class="flex-grow"> 56,695 bytes</span>
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
          <span class="flex-grow"> 10,781,219 (35.94%) -28% Gas Target</span>
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
          <span class="flex-grow"> 29,999,972</span>
        </div>

        <!--        Base Fee Per Gas:-->
        <div class="flex border-b py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="Post-London Upgrade, this represents the minimum gasUsed multiplier required for a tx to be included in a block. "
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Base Fee Per Gas:
          </span>
          <span class="flex-grow"
            >0.000000021769059658 Ether (21.769059658 Gwei)</span
          >
        </div>

        <!--        Burnt Fees:-->
        <div class="flex border-b py-4">
          <span class="flex-[0_0_25%] flex">
            <Tooltip
              text="Post-London Upgrade, this represents the part of the tx fee that is burnt: baseFeePerGas * gasUsed"
            >
              <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
            </Tooltip>
            Burnt Fees:
          </span>
          <span class="flex-grow">0.234696999596963102 Ether</span>
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
            <span class="flex-grow">
              七彩神仙鱼! (Hex:0xe4b883e5bda9e7a59ee4bb99e9b1bc040321)</span
            >
          </div>

          <!--        Hash:-->
          <div class="flex border-b py-4">
            <span class="flex-[0_0_25%] flex">
              <Tooltip
                text="The hash of the block header of the current block."
              >
                <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
              </Tooltip>
              Hash:
            </span>
            <span class="flex-grow">
              0xa7c9ba0eea090ef4699ac25a1a15b9d45514de8d392c24bad188a34012425275</span
            >
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
              <a
                href="#"
                class="text-text-primary hover:text-text-primary-hover"
              >
                0x664219a10962b7bff16f23788fe327ffc8a6c284aaacc94b385b95ef7e90ace7
              </a>
            </span>
          </div>

          <!--        Sha3Uncles:-->
          <div class="flex border-b py-4">
            <span class="flex-[0_0_25%] flex">
              <Tooltip
                text="The mechanism which Ethereum Javascript RLP encodes an empty string."
              >
                <QuestionMarkCircleIcon class="w-5 mr-2 text-text-secondary" />
              </Tooltip>
              Sha3Uncles:
            </span>
            <span class="flex-grow"
              >0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347
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
            <span class="flex-grow"
              >0xdc0403e433f99c1c9ddc63edd1a78ac1a5197d4e8119485178979c28534f61e4
            </span>
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
            <span class="flex-grow">0x7705d43180445dc0 </span>
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
import { timeSince } from "../../js/utils";
import { ref } from "vue";
import Tooltip from "../../components/Tooltip.vue";
import {
  QuestionMarkCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  ArrowSmUpIcon,
  ArrowSmDownIcon,
} from "@heroicons/vue/outline";
import EtherButton from "../../components/EtherButton.vue";

const isShowMore = ref(false);
const selectedTabIndex = ref(0);
const tabs = [
  {
    name: "Overview",
  },
  { name: "State" },
  { name: "comments" },
];
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
