// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/mi-nuxt-site/' : '/', // Reemplaza 'mi-nuxt-site' con el nombre de tu repo en GitHub
  },
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-11-01',
  css: [
    "@/assets/css/tailwind.css",
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  devtools: { enabled: true },
  generate: {
    dir: 'dist',
    fallback: '404.html', // Para que GitHub Pages maneje rutas desconocidas
  }
});
