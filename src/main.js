import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import gsap from 'gsap'

import './assets/style/main.scss';

Vue.config.productionTip = false;
Vue.use(gsap);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
