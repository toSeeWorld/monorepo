import { registerMicroApps, start } from 'qiankun'
registerMicroApps([
    {
        name: "vue -app",
        entry: '//localhost:8081',
        container: '#container',
        activeRule: '/micro-vue',
        props:{
            baseRoute:'micro-vue'
        }
    }
])
start()