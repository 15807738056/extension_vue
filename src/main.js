// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//0.如果使用模块化机制编程，导入Vue和VueRouter，要调用Vue.use(VueRouter)
import Vue from 'vue'
//import App from './App'
import VueRouter from 'vue-router'

import qs from 'qs'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.use(VueRouter)
Vue.prototype.$qs = qs
var axios = require('axios')
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//1.定义（路由）组件
//可以从其他文件import进来
import StaffInfo from './components/staffInfo'
import PerCenter from './components/perCenter'
import Page from './components/page'
import PersonPage from './components/personPage'
import Test from './components/test'
import AddDialog from './components/addDialog'
import EditDialog from './components/editDialog'
import User from './components/user'
//
//
//2.定义路由
//每个路由应映射一个组件
const routes = [
  { path:'/staffInfo',component:StaffInfo },
  { path:'/perCenter',component:PerCenter },
  { path:'/page',component:Page },
  { path:'/personPage',component:PersonPage },
  { path:'/test',component:Test },
  { path:'/addDialog',component:AddDialog },
  { path:'/editDialog',component:EditDialog },
  { path:'/user',component:User }
]

//3.创建router实例，然后传‘routes’配置
const router = new VueRouter({
	routes
})

//4.创建和挂载根实例
 var app = new Vue({
        el: '#app',
        router
    })
