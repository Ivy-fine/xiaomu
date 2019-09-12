import React, { Component } from 'react';
import {store} from '../../api/api'
import "../../css/list.css"
import Item from '../../components/listitem/listitem'
import Header from '../../components/Header/Header'
class List extends Component {
    state = { 
        goodslist:[]
     }
    render() { 
        let name = this.props.location.state.store_name;
        let {goodslist} = this.state;
        return ( 
            <div className="list">
                <Header title={name}/>
                <div className="listcont">
                    {
                        goodslist && goodslist.map((item,index)=>{
                            return <Item key={index} item = {item}/>
                        })
                    }
                </div>
            </div>
         );
    }
    componentDidMount(){
        let id = this.props.match.params.store_id
         store.getGoodslist(id).then(res=>{
            // console.log(res.data.result)
            this.setState({goodslist:res.data.result})
        })
    }
}
 
export default List;