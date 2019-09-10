import React, { Component } from 'react';
class Login extends Component {
    state = {  }
    render() { 
        return ( <div>
            <button onClick={()=>{
                localStorage.userId=123;
            }}>login</button>
        </div> );
    }
}
 
export default Login;