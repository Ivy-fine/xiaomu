import httpAxios from '../utils/http'

export const buyer = {
    captcha:() => httpAxios.get('/buyer/user/captcha') ,//图形验证码
    register:(params) => httpAxios.post('/buyer/user/register',params),//注册
    login:(params) => httpAxios.post('/buyer/user/login',params) ,//登录
    getStorelist:() => httpAxios.get('/buyer/storelist'),//获取首页国家数据
    getGoodsdetail:(goods_id) => httpAxios.get('/buyer/detail',{params:{goods_id}}),//商品详情
    getOrder:(token) => httpAxios.post('/buyer/order/order',{token})//订单列表
}

export const store = {
    getGoodslist:(store_id)=> httpAxios.post('/store/goods/list',{store_id}),//国家店铺，商品列表
}