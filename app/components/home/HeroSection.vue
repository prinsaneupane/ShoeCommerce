<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { ssrGetDynamicModelProps } from "vue/server-renderer";

import shoe1 from "~/assets/images/hero/shoe-1.jpeg";
import shoe2 from "~/assets/images/hero/shoe-2.jpeg";
import shoe3 from "~/assets/images/hero/shoe-3.jpeg";
import shoe4 from "~/assets/images/hero/shoe-4.jpeg";
import shoe5 from "~/assets/images/hero/shoe-5.jpeg";
import shoe6 from "~/assets/images/hero/shoe-6.jpeg";

const images = [shoe1, shoe2, shoe3, shoe4, shoe5, shoe6];
const currentImage = ref(0);
const nextImage = () => {
  currentImage.value = (currentImage.value + 1) % images.length;
};
const prevImage = () => {
  currentImage.value = (currentImage.value - 1 + images.length) % images.length;
};
const goToImage = (index) => {
  currentImage.value = index;
};
let interval;

onMounted(() => {
  interval = setInterval(nextImage, 5000);
});

onUnmounted(() => {
  clearInterval(interval);
});

const goToProducts = () => {
  navigateTo("/products");
};
</script>

<template>
  <section class="bg-[#F7F2EA] text-[#252220]">
    <div
      class="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-20"
    >
      <!-- Left Content -->
      <div class="max-w-xl">
        <!-- Section Label -->
        <p
          class="text-[18px] font-medium uppercase tracking-[0.28em] text-[#A06B3F]"
        >
          Wholesale Footwear · Nepal
        </p>

        <!-- Hero Heading -->
        <h1
          class="mt-6 font-serif text-5xl font-medium leading-[1.05] text-[#252220] md:text-6xl"
        >
          Footwear for
          <br />
          every style.
        </h1>

        <!-- Description -->
        <p class="mt-7 max-w-md font-sans text-[15px] leading-7 text-[#77716C]">
          Explore a curated selection of wholesale footwear created for
          retailers looking for variety, regular stock and everyday styles.
        </p>

        <!-- CTA -->
        <button
          type="button"
          @click="goToProducts"
          class="mt-8 bg-[#252220] px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-[#A06B3F]"
        >
          Explore Collection
        </button>
      </div>

      <!-- Image Carousel -->
      <div class="mt-10">
        <!-- Image -->
        <div class="overflow-hidden border border-black/10 bg-[#EDE8DE]">
          <Transition name="fade" mode="out-in">
            <img
              :key="currentImage"
              :src="images[currentImage]"
              alt="Imperial Business Link footwear collection"
              class="h-[420px] w-full object-cover md:h-[560px]"
            />
          </Transition>
        </div>

        <!-- Controls Below Carousel -->
        <div class="mt-5 flex items-center justify-between">
          <!-- Counter -->
          <p class="text-[12px] uppercase tracking-[0.18em] text-[#77716C]">
            0{{ currentImage + 1 }} / 0{{ images.length }}
          </p>

          <!-- Indicators -->
          <div class="flex items-center gap-2">
            <button
              v-for="(_, index) in images"
              :key="index"
              type="button"
              @click="goToImage(index)"
              :aria-label="`View shoe ${index + 1}`"
              class="h-px transition-all duration-300"
              :class="
                currentImage === index ? 'w-8 bg-[#252220]' : 'w-4 bg-black/20'
              "
            ></button>
          </div>

          <!-- Arrows -->
          <div class="flex items-center gap-3">
            <button
              type="button"
              @click="prevImage"
              aria-label="Previous shoe"
              class="flex h-9 w-9 items-center justify-center border border-black/10 text-[#252220] transition hover:border-[#252220] hover:bg-[#252220] hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              @click="nextImage"
              aria-label="Next shoe"
              class="flex h-9 w-9 items-center justify-center border border-black/10 text-[#252220] transition hover:border-[#252220] hover:bg-[#252220] hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
