import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'
axios.defaults.baseURL="https://10.0.0.19:45456/api/"

Vue.config.productionTip = false

Vue.use(VueAxios, axios, Vuelidate);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
