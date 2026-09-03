<script setup>
const goToContact = () => {
  navigateTo("/contact");
};
</script>

<template>
  <section class="bg-[#F7F2EA] text-[#252220]">
    <div
      class="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-24"
    >
      <!-- Left -->
      <div>
        <p
          class="text-[18px] font-medium uppercase tracking-[0.28em] text-[#A06B3F]"
        >
          Wholesale Supply
        </p>

        <h2
          class="mt-5 font-serif text-4xl font-medium leading-[1.1] md:text-5xl"
        >
          Built for retail.
        </h2>

        <p
          class="mt-6 max-w-xl font-[var(--font-sans)] text-[15px] leading-7 text-[#77716C]"
        >
          A practical wholesale footwear collection for retailers looking for
          variety, regular stock and dependable supply.
        </p>

        <button
          type="button"
          @click="goToContact"
          class="mt-8 bg-[#252220] px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-[#A06B3F]"
        >
          Get in Touch
        </button>
      </div>

      <!-- Right -->
      <div class="border-t border-black/10 md:border-l md:border-t-0 md:pl-14">
        <div class="grid gap-10 sm:grid-cols-3 md:grid-cols-1">
          <div>
            <p
              class="text-[14px] font-medium uppercase tracking-[0.2em] text-[#A06B3F]"
            >
              01
            </p>
            <h3 class="mt-3 text-[16px] font-medium">Wide Selection</h3>
            <p class="mt-2 text-sm leading-6 text-[#77716C]">
              Footwear across multiple everyday categories and styles.
            </p>
          </div>

          <div>
            <p
              class="text-[14px] font-medium uppercase tracking-[0.2em] text-[#A06B3F]"
            >
              02
            </p>
            <h3 class="mt-3 text-[16px] font-medium">Regular Stock</h3>
            <p class="mt-2 text-sm leading-6 text-[#77716C]">
              New products and fresh styles added regularly.
            </p>
          </div>

          <div>
            <p
              class="text-[14px] font-medium uppercase tracking-[0.2em] text-[#A06B3F]"
            >
              03
            </p>
            <h3 class="mt-3 text-[16px] font-medium">Wholesale Focus</h3>
            <p class="mt-2 text-sm leading-6 text-[#77716C]">
              Designed around the needs of footwear retailers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
