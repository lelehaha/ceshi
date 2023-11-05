import Vue from 'vue';
import App from './App.vue';
import router from './pages/index/router/index.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import TDesign from 'tdesign-vue';
// import 'tdesign-vue/es/style/index.css';

// Vue.use(TDesign);

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
