// import Home from '../views/Home/Home'
// import My from '../views/My/My'
// import Detail from '../views/Detail/Detail'
// import List from '../views/List/List'
// import Login from '../views/Login/Login'
// import Order from '../views/Order/Order'
// import Register from '../views/Register/Register'
import React from 'react';
import loadble from 'react-loadable'

function Loading(){
    return (
        <div className="loading">
            <img src="https://b-ssl.duitang.com/uploads/item/201606/18/20160618173902_VNsaQ.thumb.700_0.gif" alt=""/>
        </div>
    )
}

const Home = loadble({
    loader:()=> import('../views/Home/Home'),
    loading:Loading
})
const My = loadble({
    loader:()=> import('../views/My/My'),
    loading:Loading
})
const List = loadble({
    loader:()=> import('../views/List/List'),
    loading:Loading
})
const Detail = loadble({
    loader:()=> import('../views/Detail/Detail'),
    loading:Loading
})
const Login = loadble({
    loader:()=> import('../views/Login/Login'),
    loading:Loading
})
const Order = loadble({
    loader:()=> import('../views/Order/Order'),
    loading:Loading
})
const Register = loadble({
    loader:()=> import('../views/Register/Register'),
    loading:Loading
})

const routes = [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/my',
        component:My
    },
    {
        path:'/order',
        component:Order
    },
    {
        path:'/detail/:goods_id',
        component:Detail
    },
    {
        path:'/list/:store_id',
        component:List
    },
    {
        path:'/',
        redirect:'/home'
    }
]

export default routes;