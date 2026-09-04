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
    <div class="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24">
      <p
        class="text-[18px] font-medium uppercase tracking-[0.28em] text-[#A06B3F] mt-16"
      >
        New Arrivals
      </p>

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

      <div class="mt-12 border-t border-black/10"></div>
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
      class="mx-auto grid max-w-7xl grid-cols-1 gap-x-6 gap-y-14 px-6 py-16 sm:grid-cols-2 md:px-8 lg:grid-cols-4"
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

    <!-- Retail Section -->
    <RetailSection />
  </section>
</template>
