<script setup>
import shoe1 from "~/assets/images/hero/shoe-1.jpeg";
import shoe2 from "~/assets/images/hero/shoe-2.jpeg";
import shoe3 from "~/assets/images/hero/shoe-3.jpeg";
import shoe4 from "~/assets/images/hero/shoe-4.jpeg";

const products = [
  {
    name: "Classic Low Sneaker",
    code: "IBL-001",
    category: "Casual",
    image: shoe1,
  },
  {
    name: "Everyday Runner",
    code: "IBL-002",
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
    name: "Essential Casual",
    code: "IBL-004",
    category: "Casual",
    image: shoe4,
  },
];

const goToNewArrivals = () => {
  navigateTo("/new_arrivals");
};
</script>

<template>
  <section class="bg-[#EDE8DE] text-[#252220]">
    <div class="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24">
      <!-- Section Heading -->
      <div class="max-w-2xl">
        <p
          class="text-[18px] font-medium uppercase tracking-[0.28em] text-[#A06B3F]"
        >
          New Arrivals
        </p>

        <h2
          class="mt-5 font-serif text-5xl font-medium leading-[1.1] md:text-6xl"
        >
          Fresh Styles.
          <br />
          Regular Stock.
        </h2>

        <p
          class="mt-6 max-w-xl font-[var(--font-sans)] text-[15px] leading-7 text-[#77716C]"
        >
          Discover the latest footwear added to our wholesale collection,
          selected for retailers looking for fresh styles and regular stock.
        </p>
      </div>

      <!-- Divider -->
      <div class="my-12 border-t border-black/10"></div>

      <!-- Product Preview -->
      <div
        class="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
      >
        <article v-for="product in products" :key="product.code" class="group">
          <!-- Image -->
          <div class="overflow-hidden bg-[#F7F2EA]">
            <img
              :src="product.image"
              :alt="product.name"
              class="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          <!-- Details -->
          <div class="mt-5">
            <p
              class="text-[14px] font-medium uppercase tracking-[0.2em] text-[#A06B3F]"
            >
              {{ product.category }}
            </p>

            <h3 class="mt-2 font-sans text-[16px] font-medium text-[#252220]">
              {{ product.name }}
            </h3>

            <p class="mt-1 text-xs text-[#77716C]">
              {{ product.code }}
            </p>
          </div>
        </article>
      </div>

      <!-- View All -->
      <div class="mt-14 flex justify-center">
        <button
          type="button"
          @click="goToNewArrivals"
          class="bg-[#252220] px-7 py-4 font-[var(--font-sans)] text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-[#A06B3F]"
        >
          View New Arrivals
        </button>
      </div>
    </div>
  </section>
</template>
