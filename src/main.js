// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueResource from 'vue-resource'
import  axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import custome from './components/Custome'
import about from './components/about'
import add from './components/add'
import customDetail from './components/customDetail'
import editCustomer from './components/editCustom'
Vue.config.productionTip = false
Vue.prototype.$http=axios;
Vue.use(VueRouter)
// Vue.use(VueResource)
const router=new VueRouter({
  model:"history",
  base:__dirname,
  routes:[
    {path:"/",component:custome},
    {path:"/about",component:about},
    {path:"/add",component:add},
    {path:"/customDetail/:id",component:customDetail},
    {path:"/editCustomer/:id",component:editCustomer},
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  template:
    `<div id="app">
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">用户管理系统</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><router-link to="/">主页</router-link></li>
              <li><router-link to="/about">关于我们</router-link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><router-link to="/add">添加用户信息</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
      <router-view></router-view>
    </div>`
}).$mount("#app")
