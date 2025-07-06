import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@pinia/nuxt', 
    '@vueuse/nuxt'
  ],
  runtimeConfig: {
  public: {
    baseURL: process.env.NUXT_PUBLIC_BASE_URL
  }
  },
  alias: {
    '@users': fileURLToPath(new URL('./services/users', import.meta.url)),
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        "paths": {
          "@users/*": ["services/users/*"]
        }
      }
    }
  }
})