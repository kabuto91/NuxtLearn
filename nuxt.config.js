export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kabuto91',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/normailze.css'   //~代表的是根目录下
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // loaders:[
    //   {
    //     test: /\.(png|jpe?g|gif|svg)$/,
    //     loader:"url-loader",
    //     query:{
    //       limit:10000,
    //       name:'img/[name].[hash].[ext]'
    //     }
    //   }
    // ]
  }
}
