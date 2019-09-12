import React, { Component } from 'react';
import isLogin from '../../utils/isLogin'
import Header from '../../components/Header/Header';
class My extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header title={'我的'}/>
            </div>
         );
    }
}
 
export default isLogin(My);