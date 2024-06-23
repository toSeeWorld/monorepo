import Vue from 'vue'
import Vuerouter from 'vue-router'
import App from './App.vue'
const routes = [
  { path: '/', component: App },
  { path: '/micro-vue', component: App },
  // { path:'/childone',component:App}
]
Vue.use(Vuerouter)
const router = new Vuerouter({
    mode:'history',
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    routes, // `routes: routes` 的缩写
  })
export default router