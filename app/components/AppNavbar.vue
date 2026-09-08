<script setup>
import { ref, watch } from "vue";
import horizontalLogo from "~/assets/images/logo/logo.svg";

const mobileOpen = ref(false);
const route = useRoute();

const closeMenu = () => {
  mobileOpen.value = false;
};

// Close the menu whenever the route changes
watch(
  () => route.fullPath,
  () => closeMenu(),
);
</script>

<template>
  <header
    class="fixed top-0 left-0 z-[100] w-full border-b border-gray-300 bg-[#F7F2EA]"
  >
    <div
      class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8"
    >
      <NuxtLink to="/" class="flex flex-col text-[#252220] no-underline">
        <span
          class="font-[var(--font-serif)] text-lg font-medium uppercase tracking-[0.04em]"
          ><img
            :src="horizontalLogo"
            alt="Imperial Business Link"
            class="h-8 w-auto max-w-[180px] object-contain sm:h-8 sm:max-w-[220px] md:h-15 md:max-w-none"
        /></span>
      </NuxtLink>
      <nav class="hidden items-center gap-9 md:flex">
        <NuxtLink to="/" class="nav-link" exact-active-class="is-active">
          Home
        </NuxtLink>

        <NuxtLink to="/new_arrivals" class="nav-link" active-class="is-active"
          >New Arrivals</NuxtLink
        >

        <NuxtLink to="/products" class="nav-link" active-class="is-active">
          Products
        </NuxtLink>

        <NuxtLink to="/contact" class="nav-link" active-class="is-active">
          Contact
        </NuxtLink>
      </nav>
      <button
        type="button"
        class="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[6px] md:hidden"
        :aria-expanded="mobileOpen"
        :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
        aria-controls="mobile-navigation"
        @click="mobileOpen = !mobileOpen"
      >
        <span
          class="block h-px w-6 bg-[#252220] transition-transform duration-200"
          :class="mobileOpen ? 'translate-y-[3.5px] rotate-45' : ''"
        ></span>

        <span
          class="block h-px w-6 bg-[#252220] transition-transform duration-200"
          :class="mobileOpen ? '-translate-y-[3.5px] -rotate-45' : ''"
        ></span>
      </button>
    </div>
    <Transition name="mobile-menu">
      <nav
        v-if="mobileOpen"
        id="mobile-navigation"
        class="absolute left-0 top-full w-full border-b border-black/10 bg-[#F7F2EA] px-5 pb-8 pt-4 md:hidden"
      >
        <NuxtLink
          to="/"
          class="mobile-nav-link"
          exact-active-class="is-active"
          @click="closeMenu"
        >
          Home
        </NuxtLink>

        <NuxtLink
          to="/new_arrivals"
          class="mobile-nav-link"
          active-class="is-active"
          @click="closeMenu"
        >
          New Arrivals
        </NuxtLink>
        <NuxtLink
          to="/products"
          class="mobile-nav-link"
          active-class="is-active"
          @click="closeMenu"
        >
          Products
        </NuxtLink>

        <NuxtLink
          to="/contact"
          class="mobile-nav-link"
          active-class="is-active"
          @click="closeMenu"
        >
          Contact
        </NuxtLink>

        <div class="mt-8 border-t border-black/10 pt-6">
          <p class="text-[10px] uppercase tracking-[0.2em] text-[#A06B3F]">
            Wholesale Footwear · Nepal
          </p>
        </div>
      </nav>
    </Transition>
  </header>
</template>
<style scoped>
.nav-link {
  position: relative;
  padding: 0.5rem 0;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #252220;
  text-decoration: none;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background: #252220;
  transition: width 0.25s ease;
}

.nav-link:hover::after,
.nav-link.is-active::after {
  width: 100%;
}
.mobile-nav-link {
  display: block;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(37, 34, 32, 0.1);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #595653;
  text-decoration: none;
  transition: color 0.2s ease;
}

.mobile-nav-link.is-active {
  color: #252220;
  font-weight: 600;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (prefers-reduced-motion: reduce) {
  .mobile-menu-enter-active,
  .mobile-menu-leave-active,
  .menu-bar {
    transition: none;
  }
}
</style>
