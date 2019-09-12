import axios from 'axios'

const httpAxios = axios.create({
    timeout: 5000
})

httpAxios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log(config.url)
    // let needToken = ['/buyer/order/order']
    // return needToken.includes(config.url)?{
    //     ...config,
    //     headers:{
    //         ...config.headers,
    //         token:localStorage.token
    //     }
    // }:config;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
httpAxios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});


export default httpAxios;