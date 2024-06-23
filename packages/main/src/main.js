import App from './App.vue'
import router from './router'
import Vue from 'vue'
import './single-spa'
Vue.config.productionTip = false

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
console.log('dddd')
Vue.use(router);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

