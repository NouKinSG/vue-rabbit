// createRouter：创建router应用实例
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from'@/views/Layout/index.vue'
import Home from'@/views/Home/index.vue'
import Category from'@/views/Category/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path:'/',
      component:Layout,
      children:[
        {
          path: '',   //小技巧 把二级路由设置为空，就可以默认渲染
          component:Home,
        },
        {
          path:'category/:id',
          component:Category,
        }

      ],
    },
    {
      path:'/login',
      component:Login
    }
  ]
})

export default router
