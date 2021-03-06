import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
Vue.use(Router)
import router from './router'

// element-UI
import { Icon, Select, Backtop, Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Icon);
Vue.use(Select);
Vue.use(Backtop);
Vue.use(Button);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
