import React, { Component } from 'react';
import {buyer} from '../../api/api'
import detail from './detail.module.scss'
import Header from '../../components/Header/Header'
class Detail extends Component {
    state = { 
        detailInfo:{}
     }
    render() { 
        let {detailInfo} = this.state;
        return ( 
            <div className={`${detail['detail']}`}>
                <Header title={'商品详情'}/>
                <div className={`${detail['detailcont']}`}>
                    <div className="img"></div>
                    <h4>{detailInfo.goods_name}</h4>
                    <p>￥{detailInfo.price}</p>
                </div>
            </div>
         );
    }
    componentDidMount(){
        let goods_id = this.props.match.params.goods_id;
        buyer.getGoodsdetail(goods_id).then(res=>{
            console.log(res.data.result)
            this.setState({detailInfo:res.data.result})
        })
    }
}
 
export default Detail;