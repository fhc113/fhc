import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('./views/Home'),
    
  }
  ,{
      path: '/index2',
      component: () => import('./views/Index2.vue'),
    },
    {
      path: '/cha',
      component: () => import('./views/Cha.vue'),
    },
    {
      path: '/xiang',
      component: () => import('./views/Xiang.vue'),
    },
    {
      path: '/kehu',
      component: () => import('./views/Kehu.vue'),
    },
    {
      path: '/lian',
      component: () => import('./views/Lian.vue'),
    },
    {
      path: '/shang',
      component: () => import('./views/Shang.vue'),
    },
    {
      path: '/guan',
      component: () => import('./views/Guan.vue'),
    },
    {
      path: '/ditu',
      component: () => import('./views/Ditu.vue'),
    },
    {
      path: '/yibiao',
      component: () => import('./views/Yibiao.vue'),
    },
    {
      path: '/bao',
      component: () => import('./views/Bao.vue'),
    }
 
  // ,
  //   {
  //     path: "/about",
  //     name: "about",
   
  //     component: () =>
  //       import(/* webpackChunkName: "about" */ "./views/About.vue"),
  //       children:[{
  //         path:"index",
  //         component:()=>import('./views/Index.vue')
  //       }]
  //   }
   ]
});
