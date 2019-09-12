import React, { Component } from 'react';
function isLogin(Com){
    return class extends Component{
        state = { 
            isLogined:false
         }
         render(){
             return this.state.isLogined?<Com {...this.props}/>:null
         }
         componentDidMount(){
            let token = localStorage.token;
            if(token){
                this.setState({isLogined:true})
            }else{
                this.props.history.push('/login')
            }
         }
    }
}

export default isLogin;