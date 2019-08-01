// router.js引入路由
import Vue from 'vue'
import Router from 'vue-router'
// 自定义组件
import HelloContainer from "./components/HelloWorld.vue"
// 1：引入header.vue组件
import Header from "./components/Header.vue"

Vue.use(Router)
// 2：为***.vue 配置路径
export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    //2.为header..配置路径
    {path:'/Header',component:Header}
  
  ]
})
