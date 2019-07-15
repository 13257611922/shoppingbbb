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
Vue.filter('formatTime', (value, how2Format) => {
  // 参数处理,获取处理时间
  return moment(value).format(how2Format)
})

// 导入axios
import axios from 'axios'
// axios基地址设置
axios.defaults.baseURL = "http://111.230.232.110:8899/"
// 将axios添入Vue原型
Vue.prototype.$axios = axios
// axios设置跨域携带cookie
axios.defaults.withCredentials = true
// Vue.config.productionTip = false

// 导入登录页面组件
import login from './components/login.vue'
// 导入商品首页组件
import index from './components/index.vue'
// 导入商品详情组件
import detail from './components/detail.vue'
// 导入会员中心组件
import user from './components/user.vue'

//嵌套路由 
// 个人中心
import messages from './components/messages.vue'
// 订单列表
import orderlist from './components/orderlist.vue'
// 订单详情
import orderdetails from './components/orderdetails.vue'


// use设置
Vue.use(VueRouter)
Vue.use(ElementUI)

// 路由规则
const routes = [{
    path: '/index',
    component: index
  },
  // 首页重定向
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/detail/:id',
    component: detail
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/user',
    component: user,
    // 路由嵌套
    children: [{
        path: 'messages',
        component: messages
      },
      {
        path: '',
        redirect: 'messages'
      },
      {
        path: 'orderlist',
        component: orderlist
      },
      {
        path: 'orderdetails',
        component: orderdetails
      }
    ]
  }

]

// 路由对象
const router = new VueRouter({
  routes
})

const app = new Vue({
  render: h => h(App),
  // 设置给vue实例
  router
}).$mount('#app')

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 跳转user页面 登录判断
  if (to.path.indexOf('/user') == 0) {
    // 发送登录状态请求
    axios
      .get(`site/account/islogin`)
      .then(backData => {
        // console.log(backData);
        // 登录成功
        if (backData.data.code == "logined") {
          app.$message({
            message: "欢迎您,尊贵的会员!!!",
            type: "success"
          });
          next()
        } else {
          app.$message({
            message: '不可强行登入,警告!!!',
            type: 'warning'
          });
          router.push('/login')
        }
      });
  } else {
    // 若跳转页面不为user,直接过去
    next()
  }
})