<script setup>
defineProps({
  name: String,
  code: String,
  category: String,
  image: String,
})
</script>

<template>
  <NuxtLink
    :to="`/products/${code}`"
    class="block"
  >
    <article class="group cursor-pointer">
      <!-- Image -->
      <div class="overflow-hidden bg-[#EDE8DE]">
        <img
          :src="image"
          :alt="name"
          class="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <!-- Product Info -->
      <div class="mt-4">
        <p
          class="text-[10px] font-medium uppercase tracking-[0.2em] text-[#A06B3F]"
        >
          {{ category }}
        </p>

        <h3 class="mt-2 text-sm font-medium text-[#252220]">
          {{ name }}
        </h3>

        <p class="mt-1 text-xs text-[#77716C]">
          {{ code }}
        </p>
      </div>
    </article>
  </NuxtLink>
</template>