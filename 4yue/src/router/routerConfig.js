import Index from "../views/Index/Index";
import Login from "../views/Login/Login";
import Search from '../views/Search/Search';
import My from '../views/My/My';
import Home from '../views/Index/Home/Home';
import Find from '../views/Index/Find/Find';
import Usedcar from '../views/Index/Usedcar/Usedcar';
import Forum from '../views/Index/Forum/Forum';
import Service from '../views/Index/Service/Service';

const routes=[{
    path:'/index',
    component:Index,
    children:[{
        path:'/index/home',
        component:Home
    },{
        path:'/index/find',
        component:Find
    },{
        path:'/index/usedcar',
        component:Usedcar
    },{
        path:'/index/forum',
        component:Forum
    },{
        path:'/index/service',
        component:Service
    },{
        path:'/index',
        redirect:'/index/home'
    }]
},{
    path:'/login',
    component:Login
},{
    path:'/search',
    component:Search
},{
    path:'/my',
    component:My
},{
    path:'/',
    redirect:'/index'
}]


export default routes;