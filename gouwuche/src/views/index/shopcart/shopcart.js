import React, { Component } from 'react';
import Header from '../../../components/header/header'
import {connect} from 'react-redux'
import "../../../css/shopcart.css"
import {CHECKONE,CHECKALL,CHANGECOUNT,DEL} from '../../../store/types'
class Shopcart extends Component {
    state = {  }
    render() { 
        let { cartlist,sumPrice,checkall } = this.props
        return ( 
            <div className="shopcart">
                <Header title={'购物车'}/>
                <div className="cartlist">
                    {
                        cartlist.map((item,index)=>{
                            return <dl key={index}>
                                <dt>
                                    <input type="checkbox" checked={item.checked} onChange={this.checkOne.bind(this,index,!item.checked)}/>
                                </dt>
                                <dd>
                                    <img src={require("../../../"+item.img)} alt=""/>
                                    <div className="count">
                                        <p>{item.title}</p>
                                        <p>
                                            <span onClick={this.changeCount.bind(this,index,item.count-1)}>-</span>
                                            <span>{item.count}</span>
                                            <span onClick={this.changeCount.bind(this,index,item.count+1)}>+</span>
                                        </p>
                                    </div>
                                    <div className="price">
                                        <p>￥{item.price}</p>
                                        <b onClick={this.del.bind(this,item.id)}>x</b>
                                    </div>
                                </dd>
                            </dl>
                        })
                    }
                </div>
                <div className="bottom">
                    <label><input type="checkbox" checked={checkall} onChange={this.checkAll.bind(this,!checkall)}/> 全选</label><span>总价:￥{sumPrice}</span>
                </div>
            </div>
         );
    }
    checkOne(ind,flag){
        this.props.checkOne(ind,flag)
    }
    checkAll(flag){
        this.props.checkAll(flag)
    }
    changeCount(ind,count){
        this.props.changeCount(ind,count)
    }
    del(id){
        this.props.del(id)
    }
}
 
export default connect(
    (state)=>{
        return {
            cartlist:state.shopcart.cartlist,
            sumPrice:state.shopcart.sumPrice,
            checkall:state.shopcart.checkall
        }
    },
    (dispatch)=>{
        return {
            checkOne(ind,flag){
                dispatch({type:CHECKONE,ind,flag})
            },
            checkAll(flag){
                dispatch({type:CHECKALL,flag})
            },
            changeCount(ind,count){
                dispatch({type:CHANGECOUNT,ind,count})
            },
            del(id){
                dispatch({type:DEL,id})
            }
        }
    }
)(Shopcart);