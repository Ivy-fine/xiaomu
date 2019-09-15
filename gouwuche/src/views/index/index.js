import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Routerview from '../../router/routerview'
class Index extends Component {
    state = {}
    render() {
        let routes = this.props.childroutes;
        return (
            <>
                <Routerview routes={routes}/>
                <nav>
                    <NavLink to='/index/home'>主页</NavLink>
                    <NavLink to='/index/classify'>分类</NavLink>
                    <NavLink to='/index/shopcart'>购物车</NavLink>
                    <NavLink to='/index/mine'>我的</NavLink>
                </nav>
            </>
        );
    }
}

export default Index;