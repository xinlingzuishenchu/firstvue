import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/home' //默认显示的页面
}, {
  path: '/home',
  component: Home
}, {
  path: '/news',
  component: News
}];
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
