<script setup>
import { ref, computed } from "vue";

import shoe1 from "~/assets/images/hero/shoe-1.jpeg";
import shoe2 from "~/assets/images/hero/shoe-2.jpeg";
import shoe3 from "~/assets/images/hero/shoe-3.jpeg";
import shoe4 from "~/assets/images/hero/shoe-4.jpeg";
import shoe5 from "~/assets/images/hero/shoe-5.jpeg";
import shoe6 from "~/assets/images/hero/shoe-6.jpeg";
import RetailSection from "~/components/home/RetailSection.vue";

const categories = ["All", "Sneakers", "Sports", "Casual", "Formal", "Sandals"];

const activeCategory = ref("All");

const products = [
  {
    name: "Classic Low Sneaker",
    code: "IBL-001",
    category: "Sneakers",
    image: shoe1,
  },
  {
    name: "Everyday Runner",
    code: "IBL-002",
    category: "Sports",
    image: shoe2,
  },
  {
    name: "Urban Casual",
    code: "IBL-003",
    category: "Casual",
    image: shoe3,
  },
  {
    name: "Essential Formal",
    code: "IBL-004",
    category: "Formal",
    image: shoe4,
  },
];

const filteredProducts = computed(() => {
  if (activeCategory.value === "All") {
    return products;
  }

  return products.filter(
    (product) => product.category === activeCategory.value,
  );
});
</script>

<template>
  <section class="min-h-screen bg-[#F7F2EA] text-[#252220]">
    <div class="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24">
      <!-- Heading -->
      <div class="max-w-2xl">
        <p
          class="text-[18px] font-medium uppercase tracking-[0.28em] text-[#A06B3F] mt-16"
        >
          Our Collection
        </p>

        <h1
          class="mt-5 font-serif text-5xl font-medium leading-[1.05] md:text-6xl"
        >
          Wholesale Footwear
          <br />
          Collection
        </h1>

        <p class="mt-6 max-w-xl text-[15px] leading-7 text-[#77716C]">
          Explore our footwear collection across everyday styles and categories.
        </p>
      </div>

      <!-- Filters -->
      <div class="mt-14 flex w-full justify-end">
        <ProductFilters
          v-model:active-category="activeCategory"
          :categories="categories"
        />
      </div>

      <!-- Product Grid -->
      <div
        class="mt-16 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4 border-t border-black/10 pt-14"
      >
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.code"
          :name="product.name"
          :code="product.code"
          :category="product.category"
          :image="product.image"
        />
      </div>
    </div>

    <RetailSection />
  </section>
</template>
