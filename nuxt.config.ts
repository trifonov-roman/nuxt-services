import { fileURLToPath } from "url";

export default defineNuxtConfig({
  experimental: {
    typedPages: true,
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL,
    },
  },
  alias: {
    "@user": fileURLToPath(new URL("./services/user", import.meta.url)),
    "@ui": fileURLToPath(new URL("./services/ui", import.meta.url)),
  },
  imports: {
    dirs: ["composables/**/index.ts"],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          "@user/*": ["services/user/*"],
          "@ui/*": ["services/ui/*"],
        },
      },
    },
  },
    icon: {
    customCollections: [
      {
        prefix: 'local',
        dir: './assets/icons',
      },
    ],
  },
});