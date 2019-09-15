import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from '../../components/header/header'
import '../../css/detail.css'
import { ADDCART } from '../../store/types'
class Detail extends Component {
    state = {  }
    render() { 
        let { list } = this.props;
        let { c1_index,c2_index } = this.props.match.params
        let detail =list && list[c1_index].children[c2_index]
        return ( 
            <div className="detail">
                <Header title={'零食商贩'}/>
                <div className="detailcont">
                    <div className="img">
                    <img src={require('../../'+detail.img)} alt=""/>
                </div>
                <p className="count">数量 1 <span>+</span> <span onClick={this.addCart.bind(this,detail)}>加入购物车</span></p>
                <p>{detail.title}</p>
                <p>￥{detail.price}</p>
                </div>
                
            </div>
         );
    }
    addCart(obj){
        this.props.addCart(obj)
        this.props.history.replace('/index/shopcart')
    }
}
 
export default connect(
    (state)=>{
        return {
            list:state.list
        }
    },
    (dispatch)=>{
        return {
            addCart(obj){
                dispatch({type:ADDCART,obj})
            }
        }
    }
)(Detail);