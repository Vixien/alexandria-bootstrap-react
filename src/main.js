import Vue from 'vue';

import App from './App.vue';

if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

/* eslint-disable no-new */
new Vue({
  el: '#insertion-point',
  render: h => h(App),
  store
})
