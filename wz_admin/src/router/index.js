import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
  path: '/redirect',
  component: Layout,
  hidden: true,
  children: [{
    path: '/redirect/:path*',
    component: () => import('@/views/redirect/index')
  }
    // {
    //   path: '/certificateDetails',
    //   component: Layout,
    //   hidden: true,
    //   component: () => import('@/views/certificatePush/details')
    // },
  ]
},
{
  path: '/login',
  component: () => import('@/views/login/index'),
  hidden: true
},
{
  path: '/register',
  component: () => import('@/views/register/index'),
  hidden: true
},
{
  path: '/auth-redirect',
  component: () => import('@/views/login/auth-redirect'),
  hidden: true
},
{
  path: '/404',
  component: () => import('@/views/error-page/404'),
  hidden: true
},
{
  path: '/401',
  component: () => import('@/views/error-page/401'),
  hidden: true
},
{
  path: '/profile',
  component: Layout,
  redirect: '/profile/index',
  hidden: true,
  children: [{
    path: 'index',
    component: () => import('@/views/profile/index'),
    name: 'Profile',
    meta: {
      title: 'Profile',
      icon: 'user',
      noCache: true
    }
  }]
},
{
  path: '/details',
  component: Layout,
  redirect: '/details/order',
  hidden: true,
  children: [{
    path: 'orderDistribution/:id',
    component: () => import('@/views/details/orderDistribution'),
    name: 'OrderDistribution',
    meta: {
      title: '????????????'
    }
  },
  {
    path: 'orderDetails/:id',
    component: () => import('@/views/details/orderDetails'),
    name: 'OrderDetails',
    meta: {
      title: '????????????'
    }
  },
  {
    path: 'distributionDetail/:id',
    component: () => import('@/views/details/distributionDetail'),
    name: 'DistributionDetail',
    meta: {
      title: '????????????'
    }
  },
  {
    path: 'questionOrder/:id',
    component: () => import('@/views/details/questionOrder'),
    name: 'QuestionOrder',
    meta: {
      title: '???????????????'
    }
  },
  {
    path: 'logisticsDetail/:id',
    component: () => import('@/views/details/logisticsDetail'),
    name: 'LogisticsDetail',
    meta: {
      title: '????????????'
    }
  },
  {
    path: 'returned/:id',
    component: () => import('@/views/details/returned'),
    name: 'returned',
    meta: {
      title: '???????????????'
    }
  },
  {
    path: 'pushDetail/:id',
    name: 'pushDetail',
    hidden: true,
    component: () => import('@/views/details/pushDetail'),
    meta: {
      title: '????????????'
    }
  },
  {
    path: 'customerDetail/:id/:relieve',
    name: 'customerDetail',
    hidden: true,
    component: () => import('@/views/details/customerDetail'),
    meta: {
      title: '????????????'
    }
  },
  {
    path: 'organInfo/:id',
    name: 'organInfo',
    hidden: true,
    component: () => import('@/views/details/organInfo'),
    meta: {
      title: '????????????'
    }
  },
  {
    path: 'personalInfo',
    name: 'personalInfo',
    hidden: true,
    component: () => import('@/views/details/personalInfo'),
    meta: {
      title: '????????????'
    }
  }
  ]
}
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [{
  path: '',
  component: Layout,
  redirect: '/dashboard',
  children: [{
    path: 'dashboard',
    component: () => import('@/views/dashboard/index'),
    name: 'Dashboard',
    meta: {
      title: '??????',
      icon: 'dashboard'
    }
  }]
},
{
  path: '/orderManage',
  redirect: '/orderManage/delivery',
  name: 'OrderManage',
  alwaysShow: false,
  component: Layout,
  meta: {
    title: '????????????',
    'icon': 'component'
  },
  children: [{
    path: 'customerOrder',
    name: 'customerOrder',
    component: () => import('@/views/orderManage/customerOrder'),
    meta: {
      title: '????????????'
    }
  },
  {
    path: 'distributionOrder',
    name: 'DistributionOrder',
    component: () => import('@/views/orderManage/distributionOrder'),
    meta: {
      title: '?????????'
    }
  },
  {
    path: 'delivery',
    name: 'Delivery',
    component: () => import('@/views/orderManage/delivery'),
    meta: {
      title: '????????????'
    }
  },
  {
    path: 'auth',
    name: 'Auth',
    component: () => import('@/views/orderManage/auth'),
    meta: {
      title: '??????????????????'
    }
  },
  {
    path: 'quitSingle',
    name: 'QuitSingle',
    component: () => import('@/views/orderManage/quitSingle'),
    meta: {
      title: '?????????'
    }
  },
  {
    path: 'tabPrint',
    name: 'TabPrint',
    component: () => import('@/views/orderManage/tabPrint'),
    meta: {
      title: '??????????????????'
    }
  }
  ]
},
{
  path: '/credential',
  redirect: '/credential/myCredential',
  name: 'credential',
  alwaysShow: false,
  component: Layout,
  meta: {
    title: '????????????',
    'icon': 'component'
  },
  children: [{
    path: 'myCredential',
    name: 'myCredential',
    component: () => import('@/views/credential/myCredential'),
    meta: {
      title: '????????????'
    }
  },
  {
    path: 'certificatePush',
    name: 'certificatePush',
    component: () => import('@/views/credential/certificatePush'),
    meta: {
      title: '????????????'
    }
  }
  ]
},
{
  path: '/contacts',
  redirect: '/contacts/myCustomer',
  name: 'contacts',
  alwaysShow: false,
  component: Layout,
  meta: {
    title: '????????????',
    'icon': 'component'
  },
  children: [{
    path: 'myCustomer',
    name: 'myCustomer',
    component: () => import('@/views/contacts/myCustomer'),
    meta: {
      title: '????????????'
    }
  },
  {
    path: 'mySupplier',
    name: 'mySupplier',
    component: () => import('@/views/contacts/mySupplier'),
    meta: {
      title: '???????????????'
    }
  },
  {
    path: 'newContactsRelation',
    name: 'newContactsRelation',
    component: () => import('@/views/contacts/newContactsRelation'),
    meta: {
      title: '??????????????????'
    }
  },
  {
    path: 'GysManage',
    name: 'GysManage',
    component: () => import('@/views/contacts/GysManage'),
    meta: {
      title: '???????????????'
    }
  }
  ]
},
{
  path: '/systemManage',
  component: Layout,
  redirect: '/systemManage/role',
  alwaysShow: true, // will always show the root menu
  name: 'SystemManage',
  meta: {
    title: '????????????',
    icon: 'component'
  },
  children: [{
    path: 'user',
    name: 'User',
    component: () => import('@/views/system/user'),
    meta: {
      title: '????????????'
      // icon: 'user'
    }
  },
  {
    path: 'permission',
    name: 'Permission',
    component: () => import('@/views/system/permission'),
    meta: {
      title: '????????????',
      icon: 'nested'
    }
  },
  {
    path: 'dictionary',
    name: 'Dictionary',
    component: () => import('@/views/system/dictionary'),
    meta: {
      title: '????????????',
      icon: 'table'
    }
  }
  ]
},
{
  path: '/platformManage',
  component: Layout,
  redirect: '/platformManage/organization',
  alwaysShow: true, // will always show the root menu
  name: 'platformManage',
  meta: {
    title: '????????????',
    icon: 'component'
  },
  children: [{
    path: 'role',
    name: 'Role',
    component: () => import('@/views/system/role'),
    meta: {
      title: '????????????'
      // icon: 'password'
    }
  },
  {
    path: 'organization',
    name: 'organization',
    component: () => import('@/views/platformManage/organization'),
    meta: {
      title: '????????????'
      // icon: 'password'
    }
  }
  ]
}
  // 404 page must be placed at the end !!!
  // {
  //   path: '*',
  //   redirect: '/404',
  //   hidden: true
  // }
]

const createRouter = () => new Router({
  base: process.env.NODE_ENV === 'development' ? '/' : '/admin/',
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
