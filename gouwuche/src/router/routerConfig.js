import Home from "../views/index/home/home";
import classify from "../views/index/classify/classify";
import Shopcart from "../views/index/shopcart/shopcart";
import Mine from "../views/index/mine/mine";
import Index from "../views/index";
import Login from "../views/login/login";
import Detail from "../views/detail/detail";

const routes = [
    {
        path: '/index',
        component: Index,
        children: [
            {
                path: '/index/home',
                component: Home
            }, {
                path: '/index/classify',
                component: classify
            }, {
                path: '/index/shopcart',
                component: Shopcart
            }, {
                path: '/index/mine',
                component: Mine
            },
            {
                path:'/index',
                redirect:'/index/home'
            }
        ]
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/detail/:c1_index/:c2_index',
        component: Detail
    },
    {
        path: '/',
        redirect: '/index'
    }
]

export default routes;