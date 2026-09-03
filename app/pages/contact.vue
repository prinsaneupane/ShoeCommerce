<script setup>
import { ref } from "vue";

const name = ref("");
const business = ref("");
const phone = ref("");
const email = ref("");
const location = ref("");
const message = ref("");

const sendToWhatsApp = () => {
  const whatsappNumber = "9779851132019";

  const text = `
Wholesale Inquiry

Name: ${name.value}
Business Name: ${business.value}
Phone: ${phone.value}
Email: ${email.value}
Location: ${location.value}

Message:
${message.value}
  `;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
};
</script>

<template>
  <section class="bg-[#F7F2EA] text-[#252220]">
    <!-- Top Heading -->
    <div class="mx-auto max-w-7xl px-6 pt-20 md:px-8 md:pt-24">
      <h2
        class="font-serif text-3xl font-medium md:text-4xl my-4 text-center mt-8"
      >
        Ready to stock your store?
      </h2>
      <p class="mt-6 text-base leading-7 text-[#77716C] text-center">
        Tell us what you're looking for and we'll help you with product
        availability, current collections and wholesale details.
      </p>

      <div class="mt-8 border-t border-black/10"></div>
    </div>

    <div
      class="mx-auto grid max-w-7xl gap-16 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-20"
    >
      <!-- Left Side -->
      <form class="space-y-8">
        <p
          class="text-[18px] font-medium uppercase tracking-[0.28em] text-[#A06B3F]"
        >
          Get in touch
        </p>
        <div>
          <label
            for="name"
            class="text-xs uppercase tracking-[0.2em] text-[#595653]"
          >
            Full Name *
          </label>

          <input
            id="name"
            v-model="name"
            type="text"
            class="mt-4 w-full border-0 border-b border-black/10 bg-transparent outline-none transition focus:border-[#595653]"
          />
        </div>

        <div>
          <label
            for="business"
            class="text-xs uppercase tracking-[0.2em] text-[#595653]"
          >
            Business Name *
          </label>

          <input
            id="business"
            v-model="business"
            type="text"
            class="mt-4 w-full border-0 border-b border-black/10 bg-transparent outline-none transition focus:border-[#595653]"
          />
        </div>

        <div>
          <label
            for="phone"
            class="text-xs uppercase tracking-[0.2em] text-[#595653]"
          >
            Phone Number
          </label>

          <input
            id="phone"
            v-model="phone"
            type="tel"
            class="mt-4 w-full border-0 border-b border-black/10 bg-transparent outline-none transition focus:border-[#595653]"
          />
        </div>

        <div>
          <label
            for="email"
            class="text-xs uppercase tracking-[0.2em] text-[#595653]"
          >
            Email Address *
          </label>

          <input
            id="email"
            v-model="email"
            type="email"
            class="mt-4 w-full border-0 border-b border-black/10 bg-transparent outline-none transition focus:border-[#595653]"
          />
        </div>

        <div>
          <label
            for="location"
            class="text-xs uppercase tracking-[0.2em] text-[#595653]"
          >
            Location / City
          </label>

          <input
            id="location"
            v-model="location"
            type="text"
            class="mt-4 w-full border-0 border-b border-black/10 bg-transparent outline-none transition focus:border-[#595653]"
          />
        </div>

        <div>
          <label
            for="message"
            class="text-xs uppercase tracking-[0.2em] text-[#595653]"
          >
            Message
          </label>

          <textarea
            id="message"
            v-model="message"
            rows="5"
            class="mt-4 w-full resize-none border-0 border-b border-black/10 bg-transparent outline-none transition focus:border-[#595653]"
          ></textarea>
        </div>

        <button
          type="button"
          @click="sendToWhatsApp"
          class="mt-8 bg-[#252220] px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-[#A06B3F]"
        >
          Send Inquiry
        </button>
      </form>
      <div>
        <div class="px-10">
          <!-- Showrooms -->
          <div>
            <p
              class="text-[18px] font-medium uppercase tracking-[0.2em] text-[#A06B3F]"
            >
              Our Showrooms
            </p>

            <div class="mt-5 space-y-6">
              <!-- Showroom 1 -->
              <div>
                <p
                  class="mb-3 text-[16px] font-medium text-[#595653] my-8 font-bold"
                >
                  Ganesh Mini Market, Mahaboudha Nepal
                </p>
                <div>
                  <p
                    class="text-xs font-medium uppercase tracking-[0.2em] text-[#A06B3F]"
                  >
                    Phone
                  </p>

                  <p class="mt-2 text-sm text-[#77716C] my-8">+977 014158647</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.77471077769795!2d85.31125422567126!3d27.705076460222806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18557d4f51e7%3A0xbf1bf1516ffe9345!2sIMPERIAL%20SHOES%20(%20WHOLESALE%20SHOP)!5e0!3m2!1sen!2snp!4v1788170437090!5m2!1sen!2snp"
                  class="h-[250px] w-full border-0 mb-8"
                  loading="lazy"
                  allowfullscreen
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <!-- Showroom 2 -->
              <div>
                <p
                  class="mb-3 text-[16px] font-medium text-[#595653] font-bold"
                >
                  Yeti Plaza G-4, Newroad, Kathmandu
                </p>
                <div>
                  <p
                    class="text-xs font-medium uppercase tracking-[0.2em] text-[#A06B3F]"
                  >
                    Phone
                  </p>

                  <p class="mt-2 text-sm text-[#77716C]">+977 01-5315388</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.77727303206638!2d85.31242668628687!3d27.703810143946264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190063cb1e7f%3A0x9ebc5c954e837c98!2sYeti%20Plaza%20newroad!5e0!3m2!1sen!2snp!4v1788170594907!5m2!1sen!2snp"
                  class="h-[250px] w-full border-0 my-8"
                  loading="lazy"
                  allowfullscreen
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
