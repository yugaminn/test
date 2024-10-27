require('dotenv').config()

const IS_PRODUCTION = !(
  process.env.IS_TEST_FRONTEND === 'true' || process.env.IS_LOCAL === 'true'
)
console.info('nuxt.config.js IS_LOCAL（ローカル環境）:', process.env.IS_LOCAL)
console.info(
  'nuxt.config.js IS_TEST_FRONTEND（ステージング環境）:',
  process.env.IS_TEST_FRONTEND
)
console.info('nuxt.config.js IS_PRODUCTION（本番環境）:', IS_PRODUCTION)

const Base = process.env.IS_TEST_FRONTEND === 'true' ? '/test-frontend/' : '/'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - 早稲田祭2024',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#59c3e1' },
      {
        name: 'google-site-verification',
        content: 'a57OLHVTNWYRD75LfOfmh1cLuK_6UXNbNcQaxC9KD9I'
      },
      {
        name: 'google-site-verification',
        content: 'h75Pt6GAf63lWSl8RRjvGlrEnXpotFstyfEWUzpyBcA'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '2024年11月2日(土)、3日(日)に開催される早稲田祭2024の公式サイトです。'
      },
      { name: 'format-detection', content: 'telephone=no' },
      // OG
      { hid: 'og:site_name', name: 'og:site_name', content: '早稲田祭2024' },
      { hid: 'og:url', name: 'og:url', content: 'https://wasedasai.net' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: '早稲田祭2024' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://wasedasai.net/images/logo.png'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          '2024年11月2日(土)、3日(日)に開催される早稲田祭2024の公式サイトです。'
      },
      // Twitter
      { hid: 'twitter:title', name: 'twitter:title', content: '早稲田祭2024' },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          '2024年11月2日(土)、3日(日)に開催される早稲田祭2024の公式サイトです。'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: 'https://wasedasai.net'
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://wasedasai.net/images/logo.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${Base}favicon32.ico` },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.css'
      },
      {
        rel: 'canonical',
        href: 'https://wasedasai.net/'
      },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous'
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap',
        rel: 'stylesheet'
      }
    ],
    script: [
      { src: '/js/adobe-font.js' },
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-GNFK53DTX6',
        async: true
      },
      { src: '/js/google.js' },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js',
        integrity:
          'sha512-k2GFCTbp9rQU412BStrcD/rlwv1PYec9SNrkbQlo6RZCf75l6KcC3UwDY8H5n5hl4v77IDtIPwOk9Dqjs/mMBQ==',
        crossorigin: 'anonymous'
      },
      {
        src: 'https://code.jquery.com/jquery-3.6.0.js',
        type: 'text/javascript',
        integrity: 'sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=',
        crossorigin: 'anonymous'
      },

      {
        hid: 'gtag-config',
        innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-36R57HVL9Y');
          `,
        type: 'text/javascript'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/common.css',
    '@/assets/css/loading.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/image-map-resizer.js' // imagemapriseizer.20041007
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components/atoms', '~/components/organisms']
  },

  loading: './components/atoms/loading',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv', 'nuxt-lazy-load'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    base: Base
  }
}
