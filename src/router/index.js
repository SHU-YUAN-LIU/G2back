import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/index',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BannerView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/MemberView.vue')
    },
    {
      path: '/donate',
      name: 'donate',
      component: () => import('../views/DonateView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/banner',
      name: 'banner',
      component: () => import('../views/BannerView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/cadre',
      name: 'cadre',
      component: () => import('../views/CadreView.vue')
    },
    {
      path: '/policy',
      name: 'policy',
      component: () => import('../views/PolicyView.vue')
    },
    {
      path: '/journey',
      name: 'journey',
      component: () => import('../views/JourneyView.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderView.vue')
    },
    {
      path: '/countdown',
      name: 'countdown',
      component: () => import('../views/CountDown.vue')
    },
  ]
})

// 全局前置守衛
router.beforeEach((to, from, next) => {
  // 檢查 localStorage 是否有登入管理員ID
  var adminId = localStorage.getItem('adminId');
  // 如果沒有登入管理員ID，則取消跳轉(直接next(/login)跳轉回login時再被點擊上一頁時會暴露內部url)
  if (!adminId && (to.path !== '/'&& to.path !== '/login')) {
    next(false);
  }else{
    next();
  }
});

export default router
