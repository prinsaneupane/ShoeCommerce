<script setup>
import shoe1 from "~/assets/images/hero/shoe-1.jpeg";
import shoe2 from "~/assets/images/hero/shoe-2.jpeg";
import shoe3 from "~/assets/images/hero/shoe-3.jpeg";
import shoe4 from "~/assets/images/hero/shoe-4.jpeg";

const products = [
  {
    name: "TBL Sports Shoes",
    code: "9127",
    category: "Sports",
    image: shoe1,
  },
  {
    name: "Adivon Sports Shoes",
    code: "263050",
    category: "Sports",
    image: shoe2,
  },
  {
    name: "Urban Street Shoe",
    code: "IBL-003",
    category: "Sneakers",
    image: shoe3,
  },
  {
    name: "Adivon Sneakers",
    code: "263049",
    category: "Sneakers",
    image: shoe4,
  },
];

const goToNewArrivals = () => {
  navigateTo("/new_arrivals");
};
</script>

<template>
  <section class="bg-[#EDE8DE] text-[#252220]">
    <div class="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-24">
      <!-- Section Heading -->
      <div class="max-w-2xl">
        <p
          class="text-[10px] font-medium uppercase tracking-[0.2em] text-[#A06B3F] md:text-[18px] md:tracking-[0.28em]"
        >
          New Arrivals
        </p>

        <h2
          class="mt-8 font-serif text-2xl font-medium leading-[1.15] md:mt-5 md:text-6xl md:leading-[1.1]"
        >
          Fresh Styles.
          <br />
          Regular Stock.
        </h2>

        <!-- Description hidden on mobile -->
        <p
          class="mt-6 hidden max-w-xl font-[var(--font-sans)] text-[15px] leading-7 text-[#77716C] md:block"
        >
          Discover the latest footwear added to our wholesale collection,
          selected for retailers looking for fresh styles and regular stock.
        </p>
      </div>

      <!-- Divider -->
      <div class="my-8 border-t border-black/10 md:my-12"></div>

      <!-- Product Preview -->
      <div
        class="grid grid-cols-2 gap-x-3 gap-y-8 md:gap-x-6 md:gap-y-12 lg:grid-cols-4"
      >
        <article
          v-for="product in products"
          :key="product.code"
          class="group min-w-0"
        >
          <!-- Image -->
          <div class="overflow-hidden bg-[#F7F2EA]">
            <img
              :src="product.image"
              :alt="product.name"
              class="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          <!-- Details -->
          <div class="mt-3 md:mt-5">
            <p
              class="text-[9px] font-medium uppercase tracking-[0.15em] text-[#A06B3F] md:text-[14px] md:tracking-[0.2em]"
            >
              {{ product.category }}
            </p>

            <h3
              class="mt-2 font-sans text-xs font-medium leading-5 text-[#252220] md:text-[16px]"
            >
              {{ product.name }}
            </h3>

            <p class="mt-1 text-[10px] text-[#77716C] md:text-xs">
              {{ product.code }}
            </p>
          </div>
        </article>
      </div>

      <!-- View All -->
      <div class="mt-10 flex justify-center md:mt-14">
        <button
          type="button"
          @click="goToNewArrivals"
          class="bg-[#252220] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-[#A06B3F] md:px-7 md:py-4 md:text-xs md:tracking-[0.2em]"
        >
          View New Arrivals
        </button>
      </div>
    </div>
  </section>
</template>
