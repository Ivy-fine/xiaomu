import React, { Component } from 'react';
import "../../css/login.css"
import { buyer } from '../../api/api'
import { Toast } from 'antd-mobile'
class Login extends Component {
    state = { 
        captcha:'',
        username:'',
        password:'',
        code:''
     }
    render() { 
        let { captcha,username,password,code } = this.state;
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
                <label>
                    <input type="text" placeholder="图形验证码" value={captcha} onChange={(e)=>{
                        this.setState({captcha:e.target.value})
                    }}/>
                    <span dangerouslySetInnerHTML={{__html:code}}></span>
                </label>
                <button onClick={this.login.bind(this,{username,password,captcha})}>登录</button>
                <b onClick={this.gotoRegister.bind(this)}>无账号？去注册</b>
            </div>
         );
    }
    componentDidMount(){
        buyer.captcha().then(res=>{
            console.log(res.data)
            this.setState({code:res.data.data})
        })
    }
    login(obj){
        buyer.login(obj).then(res=>{
            console.log(res.data)
            if(res.data.code === 1){
                localStorage.token = res.data.token
                this.props.history.go(-1)
            }else{
                this.failToast(res.data.msg)
            }
        })
    }
    gotoRegister(){
        this.props.history.replace("/register")
    }
    failToast(msg){
        Toast.fail(msg,1)
    }
}
 
export default Login;