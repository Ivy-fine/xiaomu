const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/home.vue'),
        redirect: '/home/delivery',
        children: [
            {
                path: 'delivery',
                component: () => import('@/views/home/delivery/delivery.vue'),
                redirect: '/home/delivery/market',
                children: [
                    {
                        path: 'market',
                        component: () => import('@/views/home/delivery/market/market.vue')
                    }, {
                        path: 'global',
                        component: () => import('@/views/home/delivery/global/global.vue')
                    }
                ]
            }, {
                path: 'shopcart',
                meta: {
                    title: '购物车'
                },
                component: () => import('@/views/home/shopcart/shopcart.vue')
            }
        ]
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('@/views/detail/detail.vue')
    }, {
        path: '/addresslist',
        name: 'addresslist',
        meta: {
            title: '收货地址',
            needkeepalive: true
        },
        component: () => import('@/views/addresslist/addresslist.vue')
    }, {
        path: '/editAdd',
        name: 'editAdd',
        component: () => import('@/views/editAdd/editAdd.vue')
    },
    {
        path: '*',
        redirect: '/home'
    }
];
export default routes;
