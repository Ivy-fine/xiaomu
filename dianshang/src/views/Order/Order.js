import React, { Component } from 'react';
import isLogin from '../../utils/isLogin'
import { buyer } from '../../api/api'
import Header from '../../components/Header/Header';
class Order extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header title={'我的订单'}/>
            </div>
         );
    }
    componentDidMount(){
        let token = localStorage.token
        buyer.getOrder(token).then(res=>{
            console.log(res.data)
        })
    }
}
 
export default isLogin(Order) ;