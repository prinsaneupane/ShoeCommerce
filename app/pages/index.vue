<script setup lang="ts">
import HeroSection from "~/components/home/HeroSection.vue";
import NewArrivalsSection from "~/components/home/NewArrivalsSection.vue";
import RetailSection from "~/components/home/RetailSection.vue";
</script>

<template>
  <div>
    <!-- Desktop only -->
    <div class="hidden md:block">
      <HeroSection />
    </div>

    <NewArrivalsSection />
    <RetailSection />
  </div>
</template>
