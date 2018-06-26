const path = require('path');

module.exports = {
  env: {
  },
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
    ]
  },
  css: [
  ],
  loading: { color: '{{ color }}' },
  build: {
    extend (config, { isDev }) {
    }
  },
  modules: [
    'nuxt-ts'
  ],
  plugins: [
  ],
  generate: {
    fallback: true,
    subFolders: false
  }
};
