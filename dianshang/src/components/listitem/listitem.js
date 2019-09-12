import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
class Item extends Component {
    state = {  }
    render() { 
        let {item} = this.props
        return ( 
            <dl className="listitem" onClick={this.gotoDetail.bind(this,item.goods_id)}>
                <dt>
                    <h4>{item.goods_name}</h4>
                    <p>￥{item.price}</p>
                </dt>
                <dd></dd>
            </dl>
         );
    }
    gotoDetail(goods_id){
        this.props.history.push('/detail/' + goods_id)
    }
}
 
export default withRouter(Item) ;