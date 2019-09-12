import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import {buyer} from '../../api/api'
import Header from '../../components/Header/Header';
class Home extends Component {
    state = { 
        storelist:[]
     }
    render() { 
        let { storelist } = this.state; 
        return ( 
            <div className="home">
                <div className="header">
                    <Header title={'租赁翻译机'}/>
                    <div className="search">目的地查询</div>
                </div>
                <div className="citylist">
                    <h3>热门城市</h3>
                    <div className="citycont">
                        {
                            storelist && storelist.map((item,index)=>{
                                return <div key={index} onClick={this.gotoGoodslist.bind(this,item.store_id,item.store_name)}>{item.store_name}</div>
                            })
                        }
                    </div>
                </div>
                <div className="bottom">
                    <NavLink to='/home'>城市</NavLink>
                    <NavLink to='/order'>订单</NavLink>
                    <NavLink to='/my'>我的</NavLink>
                </div>
            </div>
         );
    }
    componentDidMount(){
        buyer.getStorelist().then(res=>{
            // console.log(res.data.result)
            this.setState({storelist:res.data.result})
        })
    }
    gotoGoodslist(store_id,store_name){
        this.props.history.push({pathname:"/list/" + store_id,state:{store_name}})
    }
}
 
export default Home;