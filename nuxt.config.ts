// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-11-01',
  css: ["@/assets/css/tailwind.css"],
  css: ['@fortawesome/fontawesome-free/css/all.min.css'],
  devtools: { enabled: true }
})
