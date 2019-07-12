import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入首页样式
import './assets/css/style.css'

// 导入路由
import VueRouter from 'vue-router'

// use设置
Vue.use(VueRouter)

// 路由规则
const routes = []

// 路由对象
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  // 设置给vue实例
  router
}).$mount('#app')