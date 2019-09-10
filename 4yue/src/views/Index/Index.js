import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import {Switch,Redirect,Route} from 'react-router-dom'
import Home from "./Home/Home"
import Find from "./Find/Find"
import Forum from "./Forum/Forum"
import Usedcar from "./Usedcar/Usedcar"
import Service from "./Service/Service"
class Index extends Component {
    state = { 
        navlist:[{
            link:'/index/home',
            text:'首页',
            com:Home
        },{
            link:'/index/find',
            text:'找车',
            com:Find
        },{
            link:'/index/usedcar',
            text:'二手车',
            com:Usedcar
        },{
            link:'/index/forum',
            text:'论坛',
            com:Forum
        },{
            link:'/index/service',
            text:'服务',
            com:Service
        }]
     }
    render() { 
        return ( <div>
            <Header navlist={this.state.navlist}></Header>
            <Switch>
                {
                    this.state.navlist.map((item,index)=>{
                        return (
                            <Route path={item.link} component={item.com} key={index}></Route>
                        )
                    })
                }
                <Redirect from="/index" to="/index/home"></Redirect>
            </Switch>
        </div> );
    }
}
 
export default Index;