<script setup>
import AppNavbar from "~/components/AppNavbar.vue";
import AppFooter from "~/components/AppFooter.vue";
</script>

<template>
  <div>
    <AppNavbar />
    <main class="pt-[72px]">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
