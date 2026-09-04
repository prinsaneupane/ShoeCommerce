<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
  },
  activeCategory: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:activeCategory"]);
</script>

<template>
  <div class="ml-auto">
    <div class="flex flex-wrap gap-3">
      <button
        v-for="category in categories"
        :key="category"
        type="button"
        @click="emit('update:activeCategory', category)"
        class="border px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-200"
        :class="
          activeCategory === category
            ? 'border-[#252220] bg-[#252220] text-white'
            : 'border-black/10 bg-transparent text-[#595653] hover:border-[#252220] hover:text-[#252220]'
        "
      >
        {{ category }}
      </button>
    </div>
  </div>
</template>
