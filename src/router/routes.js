export default [
    {
        path: '*',
        component: () => import('../views/error/404.vue'),
        meta: {
            title: '找不到页面'
        }
    }
    // {
    //     path: '/',
    //     redirect: '/userManage'
    // },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: () => import('../views/login/login.vue'),
    //     meta: {
    //         title: '登录'
    //     }
    // },
    // {
    //     path: '/iframe',
    //     component: () => import('../views/user/iframe.vue'),
    //     meta: {
    //         requireAuth: true,
    //         title: '虚机首页'
    //     }
    // },
    // {
    //     path: '/',
    //     name: 'userManage',
    //     component: () => import('../views/user/index.vue'),
    //     meta: {
    //         requireAuth: true
    //     },
    //     children: [{
    //         path: '/userManage',
    //         component: () => import('../views/user/userManage.vue'),
    //         meta: {
    //             requireAuth: true,
    //             title: '用户管理'
    //         }
    //     },
    //     {
    //         path: '/systemManage',
    //         component: () => import('../views/user/systemManage.vue'),
    //         meta: {
    //             requireAuth: true,
    //             title: '系统管理'
    //         }
    //     },
    //     {
    //         path: '/virtualManage',
    //         component: () => import('../views/user/virtualManage.vue'),
    //         meta: {
    //             requireAuth: true,
    //             title: '虚机管理'
    //         }
    //     }]
    // }
]
