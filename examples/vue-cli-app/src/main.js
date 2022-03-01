import Vue from 'vue'
import AppOutlet from './app.outlet.vue'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(AppOutlet),
}).$mount('#root')
