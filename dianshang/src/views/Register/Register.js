import React, { Component } from 'react';
import "../../css/login.css"
import { buyer } from '../../api/api'
import { Toast } from 'antd-mobile'
class Register extends Component {
    state = { 
        username:'',
        password:''
     }
    render() { 
        let { username,password } = this.state
        return ( 
            <div className="login">
                 <label>
                    <input type="text" placeholder="用户名" value={username} onChange={(e)=>{
                        this.setState({username:e.target.value})
                    }}/>
                </label>
                <label>
                    <input type="password" placeholder="密码" value={password} onChange={(e)=>{
                        this.setState({password:e.target.value})
                    }}/>
                </label>
                <button onClick={this.register.bind(this,{username,password})}>注册</button>
            </div>
         );
    }
    register(obj){
        if(obj.username!==''&&obj.password!=='')
        buyer.register(obj).then(res=>{
            console.log(res.data)
            if(res.data.code === 1){
                this.props.history.replace('/login')
            }else{
                this.failToast(res.data.msg)
            }
        })
    }
    failToast(msg){
        Toast.fail(msg,1)
    }
}
 
export default Register;