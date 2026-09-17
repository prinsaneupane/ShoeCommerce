<script setup>
const goToContact = () => {
  navigateTo("/contact");
};
</script>

<template>
  <section class="bg-[#F7F2EA] text-[#252220]">
    <div
      class="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 md:items-center md:gap-14 md:px-8 md:py-24"
    >
      <!-- Left -->
      <div>
        <p
          class="text-sm font-medium uppercase tracking-[0.2em] text-[#A06B3F] md:mt-16 md:text-[18px] md:tracking-[0.28em]"
        >
          Wholesale Supply
        </p>

        <h2
          class="mt-4 font-serif text-2xl font-medium leading-[1.15] md:mt-5 md:text-5xl md:leading-[1.1]"
        >
          Built for retail.
        </h2>

        <!-- <p
          class="mt-5 max-w-xl font-[var(--font-sans)] text-sm leading-6 text-[#77716C] md:mt-6 md:text-[15px] md:leading-7"
        >
          A practical wholesale footwear collection for retailers looking for
          variety, regular stock and dependable supply.
        </p> -->

        <button
          type="button"
          @click="goToContact"
          class="mt-8 rounded-lg bg-[#252220] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-[#A06B3F]"
        >
          Get in Touch
        </button>
      </div>

      <!-- Right: Benefits -->
      <div class="hidden md:block md:border-l md:border-black/10 md:pl-14">
        <div class="grid gap-7 sm:grid-cols-3 md:grid-cols-1 md:gap-10">
          <div>
            <p
              class="text-[10px] font-medium uppercase tracking-[0.2em] text-[#A06B3F] md:text-[14px]"
            >
              01
            </p>
            <h3 class="mt-2 text-sm font-medium md:mt-3 md:text-[16px]">
              Wide Selection
            </h3>
            <p
              class="mt-2 text-xs leading-5 text-[#77716C] md:text-sm md:leading-6"
            >
              Footwear across multiple everyday categories and styles.
            </p>
          </div>

          <div>
            <p
              class="text-[10px] font-medium uppercase tracking-[0.2em] text-[#A06B3F] md:text-[14px]"
            >
              02
            </p>
            <h3 class="mt-2 text-sm font-medium md:mt-3 md:text-[16px]">
              Regular Stock
            </h3>
            <p
              class="mt-2 text-xs leading-5 text-[#77716C] md:text-sm md:leading-6"
            >
              New products and fresh styles added regularly.
            </p>
          </div>

          <div>
            <p
              class="text-[10px] font-medium uppercase tracking-[0.2em] text-[#A06B3F] md:text-[14px]"
            >
              03
            </p>
            <h3 class="mt-2 text-sm font-medium md:mt-3 md:text-[16px]">
              Wholesale Focus
            </h3>
            <p
              class="mt-2 text-xs leading-5 text-[#77716C] md:text-sm md:leading-6"
            >
              Designed around the needs of footwear retailers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
