import React, { Component } from 'react';
let isLogin=(Com)=> {
    return class extends Component {
        state = {
            islogin: false
        }
        render() {
            return this.state.islogin ? <Com {...this.props}/> : null;
        }
        componentDidMount(){
            let userId=localStorage.userId;
            if(userId){
                this.setState({islogin:true})
            }else{
                this.props.history.push("/login")
            }
        }
    }
}

export default isLogin;