import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Routerview from "../../router/routerview"
class Index extends Component {
    state = { 
        navlist:[{
            link:'/index/home',
            text:'首页'
        },{
            link:'/index/find',
            text:'找车'
        },{
            link:'/index/usedcar',
            text:'二手车'
        },{
            link:'/index/forum',
            text:'论坛'
        },{
            link:'/index/service',
            text:'服务'
        }]
     }
    render() { 
        let {childroutes} = this.props
        return ( <div>
            <Header navlist={this.state.navlist}></Header>
            <Routerview routes={childroutes}></Routerview>
        </div> );
    }
}
 
export default Index;