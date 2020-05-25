import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import store from '../store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/my',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/My.vue'),
    meta:{
      isLogin:true
    }
  },
   
  {
    path: '/page/:id',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Otherpage.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  console.log(to.matched);
  
  if (to.matched.some(r => r.meta.isLogin)) {
    console.log('哈哈哈哈哈哈哈哈哈哈哈');
    
    if (store.state.isLogined == false || localStorage.getItem('islogin') == false) {
      //因为需要跳转到登录前的路由 所以需要将登录前的路由作为参数传递给login
      //login成功后 再获取该参数,并跳转到路由地址
      router.push({
        path: '/login',
        query:{
          path:to.fullPath
        }
      })
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router
