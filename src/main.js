import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import Vant from 'vant';

//css
import './css/common.css'
import 'vant/lib/index.css';

import './http/axios'
import http from './http/http';
import api from './http/api';

Vue.use(Vant);

// 对后端接口 进行全局注册
Vue.prototype.$api = api;
// 对请求方式 进行全局注册
Vue.prototype.$http = http;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
