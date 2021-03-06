// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入 ElementUI
import ElementUI from 'element-ui'
// 引入 ElementUI 样式文件
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
// 适用vue插件 Element
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
