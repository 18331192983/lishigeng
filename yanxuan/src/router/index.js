import Vue from 'vue'
import Router from 'vue-router'
import Shouye from "@/views/shouye/shouye"
import Home from "@/views/shouye/home"
import Classify from "@/views/shouye/classify"
import Cart from "@/views/shouye/cart"
import User from "@/views/shouye/user"
import Bargain from '@/views/more/bargain'
import Special from '@/views/more/special'
import SpecialTwo from '@/views/more/specialTwo'
import ClassifyTwo from '@/views/more/classifyTwo'
import Detail from '@/views/shop/detail'
import Login from '@/views/user/login'
import Register from '@/views/user/register'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Shouye,
      children: [
        {
          path: '',
          component:Home
        },
        {
          path: '/classify',
          component: Classify
        },
        {
          path: '/cart',
          component: Cart
        },
        {
          path: '/user',
          component: User
        },
      ]
    },
    {
      path: '/bargain',
      component:Bargain
    },
    {
      path: '/special',
      component: Special
    },
    {
      path: '/specialTwo/:id?',
      component: SpecialTwo
    },
    {
      path: '/classifyTwo/:id?',
      component: ClassifyTwo
    },
    {
      path: '/detail/:id?',
      component: Detail
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
  ]
})
