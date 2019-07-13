import Vue from 'vue'
import App from './App.vue'



// 导入饿了吗UI样式
import 'element-ui/lib/theme-chalk/index.css';
// 导入首页样式
import './assets/css/style.css'


// 导入路由
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'

// 全局设置过滤器
import moment from 'moment'
// 过滤器携带参数(旧数据,新数据)
Vue.filter('formatTime',(value,how2Format)=>{
  // 参数处理,获取处理时间
  return moment(value).format(how2Format)
})

import axios from 'axios'
// axios基地址设置
axios.defaults.baseURL ="http://111.230.232.110:8899/"
// 将axios添入Vue原型
Vue.prototype.$axios = axios
Vue.config.productionTip = false




// 导入商品首页组件
import index from './components/index.vue'
// 导入商品详情组件
import detail from './components/detail.vue'

// use设置
Vue.use(VueRouter)
Vue.use(ElementUI)

// 路由规则
const routes = [
  {path:'/index',component:index},
  // 首页重定向
  {path:'/',redirect:'/index'},
  {path:'/detail/:id',component:detail},

]

// 路由对象
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  // 设置给vue实例
  router
}).$mount('#app')