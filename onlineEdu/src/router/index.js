import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import AllCursor from '../components/AllCursor.vue'
import CursorContent from '../components/CursorContent.vue'
import Message from '../components/Message.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '/AllCursor',
      name: '课程',
      component: AllCursor
    },
    {
      path: '/CursorContent',
      name: '课程',
      component: CursorContent
    },
    {
      path: '/Message',
      name: '资讯',
      component: Message
    },
    {
      path:'*',redirect:'/'
    }
  ]
})
