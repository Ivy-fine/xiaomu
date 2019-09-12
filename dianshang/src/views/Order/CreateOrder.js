import React, { Component } from 'react';
import isLogin from '../../utils/isLogin'
import { buyer } from '../../api/api'
import Header from '../../components/Header/Header';
class CreateOrder extends Component {
    state = { 
        receiver_name:'',
        receiver_address:'',
        receiver_phone:''
     }
    render() { 
        return ( 
            <div>
                <Header title={'填写订单'}/>
                <div>
                    <p>姓名<input type="text"/></p>
                    <p>地址<input type="text"/></p>
                    <p>电话<input type="text"/></p>
                </div>
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
 
export default isLogin(CreateOrder) ;