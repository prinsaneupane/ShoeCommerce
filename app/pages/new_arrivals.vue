<script setup>
import shoe1 from "~/assets/images/hero/shoe-1.jpeg";
import shoe2 from "~/assets/images/hero/shoe-2.jpeg";
import shoe3 from "~/assets/images/hero/shoe-3.jpeg";
import shoe4 from "~/assets/images/hero/shoe-4.jpeg";
import RetailSection from "~/components/home/RetailSection.vue";

const categories = ["All", "Sneakers", "Sports", "Casual", "Formal", "Sandals"];

const activeCategory = ref("All");
const newArrivals = [
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

const filteredArrivals = computed(() => {
  if (activeCategory.value === "All") {
    return newArrivals;
  }

  return newArrivals.filter(
    (product) => product.category === activeCategory.value,
  );
});
</script>

<template>
  <section class="min-h-screen bg-[#F7F2EA] text-[#252220]">
    <!-- Header -->
    <div class="mx-auto max-w-7xl px-6 pt-16 pb-10 md:px-8 md:pt-24 md:pb-20">
      <!-- Always visible -->
      <p
        class="text-sm font-medium uppercase tracking-[0.2em] text-[#A06B3F] md:mt-16 md:text-[18px] md:tracking-[0.28em]"
      >
        New Arrivals
      </p>

      <!-- Desktop only -->
      <div class="hidden md:block">
        <h1
          class="mt-5 font-serif text-5xl font-medium leading-[1.05] md:text-6xl"
        >
          Fresh Styles.
          <br />
          Regular Stock.
        </h1>

        <p class="mt-6 max-w-xl text-[15px] leading-7 text-[#77716C]">
          Discover the latest footwear added to our wholesale collection.
        </p>
      </div>

      <div
        class="hidden md:block md:mt-12 md:border-t md:border-black/10"
      ></div>
    </div>
    <!-- Filters -->
    <div class="mx-auto flex w-full max-w-7xl justify-end px-6 md:px-8">
      <ProductFilters
        v-model:active-category="activeCategory"
        :categories="categories"
      />
    </div>
    <!-- Product Grid -->
    <div
      class="mx-auto grid max-w-7xl grid-cols-2 gap-x-3 gap-y-8 px-6 py-10 md:gap-x-6 md:gap-y-14 md:px-8 md:py-16 lg:grid-cols-4"
    >
      <ProductCard
        v-for="product in filteredArrivals"
        :key="product.code"
        :name="product.name"
        :code="product.code"
        :category="product.category"
        :image="product.image"
      />
    </div>
    <div
      v-if="filteredArrivals.length === 0"
      class="mx-auto max-w-7xl px-6 py-20 text-center md:px-8"
    >
      <h3 class="font-serif text-2xl font-medium text-[#252220]">
        No new arrivals yet
      </h3>

      <p class="mt-3 text-sm leading-6 text-[#77716C]">
        There are currently no new arrivals available in this category.
      </p>
    </div>
    <!-- Retail Section -->
    <RetailSection />
  </section>
</template>
