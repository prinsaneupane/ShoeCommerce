<script setup>
import { ref, computed } from "vue";

import shoe1 from "~/assets/images/products/shoe-1.jpeg";
import shoe2 from "~/assets/images/products/shoe-2.jpeg";
import shoe3 from "~/assets/images/products/shoe-3.jpeg";
import shoe4 from "~/assets/images/products/shoe-4.jpeg";
import shoe5 from "~/assets/images/products/shoe-5.jpeg";
import shoe6 from "~/assets/images/products/shoe-6.jpeg";
import shoe7 from "~/assets/images/products/shoe-7.jpeg";
import shoe8 from "~/assets/images/products/shoe-8.jpeg";
import shoe9 from "~/assets/images/products/shoe-9.jpeg";
import RetailSection from "~/components/home/RetailSection.vue";

const categories = ["All", "Sneakers", "Sports", "Casual", "Formal", "Sandals"];

const activeCategory = ref("All");
const searchQuery = ref("");

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
  // {
  //   name: "TBL Sport Shoes",
  //   code: "9127",
  //   category: "Sports",
  //   image: shoe3,
  // },
  {
    name: "Adivon Sneakers",
    code: "263049",
    category: "Sneakers",
    image: shoe4,
  },
  {
    name: "TBL Sneakers",
    code: "p-2",
    category: "Sneakers",
    image: shoe5,
  },
  {
    name: "Songta Badminton Shoes",
    code: "145",
    category: "Sports",
    image: shoe6,
  },
  {
    name: "TBL Running Shoes",
    code: "9126",
    category: "Casual",
    image: shoe7,
  },
  {
    name: "Songta Sneakers",
    code: "299",
    category: "Sneakers",
    image: shoe8,
  },
  {
    name: "Adivon Casual Shoes",
    code: "263040",
    category: "Casual",
    image: shoe9,
  },
];

const filteredProducts = computed(() => {
  let result = products;

  // Category filter
  if (activeCategory.value !== "All") {
    result = result.filter(
      (product) => product.category === activeCategory.value,
    );
  }

  // Search filter
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();

    result = result.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.code.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query),
    );
  }

  return result;
});
</script>

<template>
  <section class="min-h-screen bg-[#F7F2EA] text-[#252220]">
    <div class="mx-auto max-w-7xl px-6 pb-20 md:px-8 md:py-5">
      <!-- Heading -->
      <div class="hidden max-w-2xl md:block">
        <p
          class="text-[18px] font-medium uppercase tracking-[0.28em] text-[#A06B3F] mt-16"
        >
          Our Collection
        </p>

        <h1
          class="mt-5 font-serif text-5xl font-medium leading-[1.05] md:text-6xl"
        >
          Explore our footwear collection
        </h1>
      </div>

      <!-- Filters -->
      <div
        class="flex flex-col gap-6 md:mt-14 md:flex-row md:items-center md:justify-between"
      >
        <!-- Search -->
        <div class="w-full md:max-w-sm">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search products..."
            class="w-full border-0 border-b border-black/10 bg-transparent py-3 text-sm text-[#252220] outline-none placeholder:text-[#9A948E] focus:border-[#252220]"
          />
        </div>

        <!-- Filters -->
        <ProductFilters
          v-model:active-category="activeCategory"
          :categories="categories"
        />
      </div>

      <!-- Product Grid -->
      <div
        class="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 pt-10 md:mt-2 md:gap-x-6 md:gap-y-14 md:pt-14 lg:grid-cols-4"
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
      <!-- Empty State -->
      <div v-if="filteredProducts.length === 0" class="py-20 text-center">
        <h3 class="font-serif text-2xl font-medium text-[#252220]">
          {{ searchQuery.trim() ? "No products found" : "No items added yet" }}
        </h3>

        <p class="mt-3 text-sm leading-6 text-[#77716C]">
          {{
            searchQuery.trim()
              ? "Try searching with a different name, product code, or category."
              : "There are currently no products available in this category."
          }}
        </p>
      </div>
    </div>
  </section>
</template>
