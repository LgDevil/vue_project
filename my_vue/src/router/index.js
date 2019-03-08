import Vue from 'vue'
import Router from 'vue-router'
import Main from '../page/main'
import Login from '../page/login'
import blogMsg from '../page/content/blog_msg'
import writeBlog from '../page/content/write_blog'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name :'Login',
      component: Login
    },{
      path:'/main',
      name:'Main',
      component:Main,
      children:[{
        path:'blog_msg',
        name:'blogMsg',
        component:blogMsg,
      },{
        path:'write_blog',
        name:'writeBlog',
        component:writeBlog,
      }
      ],
      redirect:'/main/blog_msg'
    }

  ]
})

router.beforeEach((to,from,next) =>{
  const userInfo = window.localStorage.getItem('key');
  if(userInfo){
    next();
  }else{
    if(to.path=='/'){ //如果是登录页面路径，就直接next()
      next();
    } else { //不然就跳转到登录；
      next('/');
    }
  }
})

export default router
