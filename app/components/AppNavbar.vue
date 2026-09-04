<template>
  <header class="fixed w-full border-b border-black/10 bg-[#F7F2EA]">
    <div
      class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8"
    >
      <NuxtLink to="/" class="flex flex-col text-[#252220] no-underline">
        <span
          class="font-[var(--font-serif)] text-lg font-medium uppercase tracking-[0.04em]"
          ><img
            src="/assets/images/logo/logo.svg"
            alt="Imperial Business Link"
            class="h-15 w-auto object-contain"
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
    </div>
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
</style>
