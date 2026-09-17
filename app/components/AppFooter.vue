<script setup>
import WhatsappIcon from "@iconify-vue/fa/whatsapp";
import ViberIcon from "@iconify-vue/fa-brands/viber";
import FacebookMessengerIcon from "@iconify-vue/fa-brands/facebook-messenger";
</script>

<template>
  <footer class="border-t border-black/10 bg-[#EDE8DE] text-[#252220]">
    <div
      class="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:grid-cols-3 md:px-8 md:py-16"
    >
      <!-- Brand -->
      <div class="flex items-start justify-center md:justify-start">
        <div class="text-center md:text-left">
          <h2 class="text-sm font-semibold uppercase tracking-[0.18em]">
            Imperial Business Link
          </h2>

          <p class="mt-2 text-xs uppercase tracking-[0.2em] text-[#A06B3F]">
            Wholesale Footwear · Nepal
          </p>

          <!-- Social Links -->
          <div
            class="mt-8 flex flex-col items-center gap-4 text-sm text-[#77716C] md:items-start"
          >
            <a
              href="https://wa.me/9779851132019"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 transition-colors hover:text-[#252220]"
            >
              <WhatsappIcon class="text-base" height="1em" />
              <span>WhatsApp</span>
            </a>

            <a
              href="viber://chat?number=%2B9779851132019"
              class="flex items-center gap-3 transition-colors hover:text-[#252220]"
            >
              <ViberIcon class="text-base" height="1em" />
              <span>Viber</span>
            </a>

            <a
              href="https://m.me/dhruba.neupane.90"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 transition-colors hover:text-[#252220]"
            >
              <FacebookMessengerIcon class="text-base" height="1em" />
              <span>Messenger</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="hidden md:block">
        <h3 class="text-sm font-semibold uppercase tracking-[0.18em]">
          Navigate
        </h3>

        <nav class="mt-8 flex flex-col gap-5 text-sm text-[#77716C]">
          <NuxtLink to="/" class="transition-colors hover:text-[#252220]">
            Home
          </NuxtLink>

          <NuxtLink
            to="/products"
            class="transition-colors hover:text-[#252220]"
          >
            Products
          </NuxtLink>

          <NuxtLink
            to="/new_arrivals"
            class="transition-colors hover:text-[#252220]"
          >
            New Arrivals
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="transition-colors hover:text-[#252220]"
          >
            Contact
          </NuxtLink>
        </nav>
      </div>

      <!-- Contact -->
      <div class="hidden md:block">
        <h3 class="text-sm font-semibold uppercase tracking-[0.18em]">
          Contact
        </h3>

        <div class="mt-8 space-y-4 text-sm text-[#77716C]">
          <p>Kathmandu, Nepal</p>

          <p>neupane.dhruba@gmail.com</p>

          <p>+977 9851132019</p>

          <p class="pt-2 text-xs uppercase tracking-[0.18em] text-[#A06B3F]">
            Sun - Fri · 9 AM - 7 PM
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-black/10">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-7 text-center text-[10px] uppercase tracking-[0.12em] text-[#77716C] md:flex-row md:justify-between md:px-8 md:text-left md:text-xs md:tracking-[0.18em]"
      >
        <p>© 2026 All Rights Reserved.</p>

        <p class="hidden md:block">Wholesale Footwear Supplier · Nepal</p>
      </div>
    </div>
  </footer>
</template>
