import React, { Component } from 'react';
import Axios from 'axios';

class Login extends Component {
    state = { 
        name:'',
        pwd:''
     }
    render() {
        let {name,pwd}=this.state; 
        return ( <div>
            <input type="text" value={name} name="name" onChange={this.changevalue.bind(this)}/>
            <input type='password' value={pwd} name="pwd" onChange={this.changevalue.bind(this)}/>
            <button onClick={this.login.bind(this,name,pwd)}>
                login
            </button>
        </div> );
    }
    login(name,pwd){
        Axios.post("/login",{name,pwd}).then(res=>{
            console.log(res.data.msg)
            if(res.data.code===1){
                localStorage.userId = name;
                this.props.history.go(-1);
            }
        })    
    }
    changevalue(e){
        let val = e.target.name
        this.setState({[val]:e.target.value})
    }
}
 
export default Login;