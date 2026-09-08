import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // Browser back/forward restores the previous position
    if (savedPosition) {
      return savedPosition;
    }

    // Anchor links still scroll to their target
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 72,
      };
    }

    // Every new page opens at the top
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
};
