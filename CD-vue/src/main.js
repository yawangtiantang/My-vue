// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入axios
import axios from 'axios'

import base from '@/router/baseCss/base.css'
//全局挂载axios
Vue.prototype.$http = axios

//按需引入element组件
import {
  Button,
  Form,
  FormItem,
  Input,
  Menu,
  MenuItem,
  submenu,
  Carousel,
  CarouselItem,
  Tabs,
} from 'element-ui';

//按需注册element组件
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(submenu)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Tabs)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
