// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
import '@/assets/css/reset.css'
import store from './store/index'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as filters from './filters'
import App from './App'

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
})
Vue.prototype.$http = axios;
Vue.use(ElementUI)




import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  error: '../static/img/error.jpg',
  loading: '../static/img/loading.gif'
});
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  filters,
  store,
  template: '<App/>',
  components: {
    App
  },
  render: h => h(App)
})
