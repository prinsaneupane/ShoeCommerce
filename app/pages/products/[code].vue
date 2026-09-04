<script setup>
import shoe1 from "~/assets/images/hero/shoe-1.jpeg";
import shoe2 from "~/assets/images/hero/shoe-2.jpeg";
import shoe3 from "~/assets/images/hero/shoe-3.jpeg";
import shoe4 from "~/assets/images/hero/shoe-4.jpeg";

const route = useRoute();
const router = useRouter();

const products = [
  {
    code: "IBL-001",
    name: "Classic Low Sneaker",
    category: "Sneakers",
    sizes: "39–44",
    colors: "White, Black",
    availability: "In Stock",
    images: [shoe1],
  },
  {
    code: "IBL-002",
    name: "Everyday Runner",
    category: "Sports",
    sizes: "40–45",
    colors: "Grey, Black, White",
    availability: "In Stock",
    images: [shoe2],
  },
  {
    code: "IBL-003",
    name: "Urban Casual",
    category: "Casual",
    sizes: "39–43",
    colors: "Brown, Black",
    availability: "Limited Stock",
    images: [shoe3],
  },
  {
    code: "IBL-004",
    name: "Essential Formal",
    category: "Formal",
    sizes: "40–44",
    colors: "Black, Brown",
    availability: "In Stock",
    images: [shoe4],
  },
];

const product = products.find((item) => item.code === route.params.code);

const goBack = () => {
  router.back();
};

const sendInquiry = () => {
  const number = "9779851132019";

  const text = `
Hello, I want to inquire about this product:

Product: ${product.name}
Code: ${product.code}
Category: ${product.category}
Sizes: ${product.sizes}
Colors: ${product.colors}
Availability: ${product.availability}
  `;

  window.open(
    `https://wa.me/${number}?text=${encodeURIComponent(text)}`,
    "_blank",
  );
};
</script>

<template>
  <section v-if="product" class="min-h-screen bg-[#F7F2EA] text-[#252220]">
    <div class="mx-auto max-w-7xl px-6 pt-28 pb-20 md:px-8 md:pt-32 md:pb-24">
      <!-- Back Button -->
      <button
        type="button"
        @click="goBack"
        class="mb-10 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#595653] transition hover:text-[#A06B3F]"
      >
        <span>←</span>
        Back to Products
      </button>

      <!-- Product Layout -->
      <div class="grid gap-12 md:grid-cols-2 md:items-start">
        <!-- Product Images -->
        <div class="space-y-5">
          <div
            v-for="(image, index) in product.images"
            :key="index"
            class="overflow-hidden bg-[#EDE8DE]"
          >
            <img :src="image" :alt="product.name" class="w-full object-cover" />
          </div>
        </div>

        <!-- Product Info -->
        <div class="md:top-28">
          <p
            class="text-xs font-medium uppercase tracking-[0.2em] text-[#A06B3F]"
          >
            {{ product.category }}
          </p>

          <h1 class="mt-4 font-serif text-4xl font-medium md:text-5xl">
            {{ product.name }}
          </h1>

          <p class="mt-3 text-sm text-[#77716C]">
            {{ product.code }}
          </p>

          <div class="mt-10 space-y-6 border-t border-black/10 pt-8">
            <!-- Sizes -->
            <div>
              <p class="text-xs uppercase tracking-[0.18em] text-[#A06B3F]">
                Available Sizes
              </p>

              <p class="mt-2 text-sm text-[#595653]">
                {{ product.sizes }}
              </p>
            </div>

            <!-- Colors -->
            <div>
              <p class="text-xs uppercase tracking-[0.18em] text-[#A06B3F]">
                Colors
              </p>

              <p class="mt-2 text-sm text-[#595653]">
                {{ product.colors }}
              </p>
            </div>

            <!-- Availability -->
            <div>
              <p class="text-xs uppercase tracking-[0.18em] text-[#A06B3F]">
                Availability
              </p>

              <p class="mt-2 text-sm text-[#595653]">
                {{ product.availability }}
              </p>
            </div>
          </div>

          <!-- WhatsApp Inquiry -->
          <button
            type="button"
            @click="sendInquiry"
            class="mt-10 w-full bg-[#252220] px-6 py-5 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#A06B3F]"
          >
            Send Inquiry on WhatsApp
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
