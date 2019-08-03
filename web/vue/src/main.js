import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 以上是三行不要动保存在原来的位置
// 原因：引入有序
// 第三方组件库在下面引入
//1：完整引入mint-Ui
 import MintUI from 'mint-ui'
//2：单引引入mint-Ui样式
 import 'mint-ui/lib/style.css'
//3：将mint-Ui注册Vue
 Vue.use(MintUI);
 //4.引入图标字体样式文件
 import "./font/iconfont.css"
//:引入 axios.js文件
import axios from "./axios"



Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
