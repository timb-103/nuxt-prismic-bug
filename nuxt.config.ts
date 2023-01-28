// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/prismic'],

  prismic: {
    endpoint: 'https://blog.prismic.io/api/v2',
    toolbar: false,
    preview: false,
  },
})
