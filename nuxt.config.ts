// https://nuxt.com/docs/api/configuration/nuxt-config
import ViteYaml from "@modyfi/vite-plugin-yaml"

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', "nuxt-gtag"],
  app: {
    buildAssetsDir: 'custom_assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  vite: {
    plugins: [ViteYaml()],
  },
  gtag: {
    id: 'G-J7PR4VPYSC',
  },
})

