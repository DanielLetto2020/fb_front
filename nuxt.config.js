const isProd = process.env.NODE_ENV === "production";

export default {
  vue: {
    config: {
      productionTip: false,
      devtools: !isProd
    }
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  server: {
    port: 5512, // default: 3000
    host: !isProd ? "localhost" : "0.0.0.0" // default: localhost 0.0.0.0
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fb_front',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: "~/assets/scss/main.scss", lang: "scss"}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: "~/plugins/config-axios.js"},
    {src: '~/plugins/bootstrap-vue'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
    proxyHeaders: false,
    retry: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
