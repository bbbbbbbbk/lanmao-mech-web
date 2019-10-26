import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import Vant from 'vant';

//css
import './css/common.css'
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
