import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Alexandre SOARES - Full Stack Developer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // router
  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth',
        }
      } else {
        return { x: 0, y: 0, behavior: 'smooth' }
      }
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
  ],

  // Google Analytics
  googleAnalytics: {
    id: 'UA-128199176-1',
    autoTracking: {
      screenview: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          html: '#D84C24',
          css: '#0366B7',
          javascript: '#EBD41B',
          sass: '#C16191',
          bootstrap: '#523A75',
          vuejs: '#3DAF7C',
          nuxtjs: '#364D60',
          vuetify: '#75BCF2',
          nodejs: '#377F37',
          docker: '#255099',
          graphql: '#DA33A1',
          jira: '#237CF2',
          vscode: '#025FA1',
          firebase: '#F2C228',
          git: '#E44C31',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate'],
  },
}
