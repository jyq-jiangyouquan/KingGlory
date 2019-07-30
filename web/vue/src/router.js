// router.js引入路由
import Vue from 'vue'
import Router from 'vue-router'
// 自定义组件
import HelloContainer from "./components/HelloWorld.vue"
// 1：引入Exam01.vue组件


Vue.use(Router)
// 2：为Exam01.vue 配置路径
export default new Router({
  routes: [
    {path:'/',component:HelloContainer}
    //2.为Exam0..配置路径

  
  ]
})
