import './publi_path'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router';
const render = (props) => {
  const { container, baseRoute } = props
  const app = createApp(App)
  const router = createRouter({
    history: createWebHistory(baseRoute),
    routes
  })
  app.use(router)
  app.mount(container ? container.querySelector("#app") : '#app')

}

if (!window.__POWERED_BY_QIANKUN__) {
  render({ baseRoute: 'micro-vue' })
}
console.log('26:21')

export async function bootstrap() {
  console.log('react app bootstraped');
}
export async function mount(props) {
  console.log('pros', props)
  render(props)
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}
