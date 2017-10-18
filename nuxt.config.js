module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
      // <script src="/__/firebase/4.5.0/firebase-app.js"></script>
      // <script src="/__/firebase/4.5.0/firebase-auth.js"></script>
      // <script defer src="/__/firebase/init.js"></script>
    ],
    script: [
      // { src: 'https://www.gstatic.com/firebasejs/4.5.0/firebase.js' }
      // { src: '/__/firebase/4.5.0/firebase-auth.js' },
      // { src: '/__/firebase/init.js', defer: true  }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      // if (ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  },
  plugins: [
    {src: '~/plugins/firebase-init.js', ssr: false },
    {src: '~/plugins/auth-cookie.js', ssr: false }
  ],
  serverMiddleware: [
      '~/serverMiddleware/validateFirebaseIdToken'
  ]
}
