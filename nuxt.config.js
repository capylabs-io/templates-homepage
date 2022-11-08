import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - landing-page',
    title: 'landing-page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: '/js.js' }
  ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: {
        customProperties: true,
      },
      dark: true,
      themes: {
        dark: {
          primary: "#6A49E2",
          //Gray
          gray0: "#FDFEFE",
          gray1: "#F4F4F5",
          gray2: "#EAEAEB",
          gray3: "#DFDFE1",
          gray4: "#CACACE",
          gray5: "#B5B5BA",
          gray6: "#A0A0A6",
          gray7: "#8B8B92",
          gray8: "#77777E",
          gray9: "#636369",
          gray10: "#4F4F54",
          gray11: "#3B3B3F",
          gray12: "#2A2A2D",
          gray13: "#1E1E20",
          //Other
          pigmentBlue: "#353897",
          majorelleBlue: "#6A49E2",
          blueJeans: "#4DAAF8",
          emerald: "#65C77C",
          mango: "#F6C453",
          coral: "#F0845D",
          paradisePink: "#E24E6E",
          purplePizzazz: "#E569D9",
          cottonCandy: "#F4C7F0",
          wildBlueYondar: "#6F7488",
          // prime
          prime2: "#A0A1A2",
          prime7: "#3D3D3D",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
