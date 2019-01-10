import Vue from 'vue'
import Router from 'vue-router'


import homeComponent from "../pages/home/index.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'./home'},
   {path:'/home',component:homeComponent}
  ]
})
