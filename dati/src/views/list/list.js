import React, { Component } from 'react';
import LazyLoad from 'react-lazyload'

class List extends Component {
    state = { 
        list:[1,2,3,4,5,6,7,8,9,0]
     }
    render() { 
        return ( 
            <div className="list">
                {
                    this.state.list.map((item,index)=>{
                        return <LazyLoad key={index} height={200}>
                            <div>{item}</div>
                        </LazyLoad>
                    })
                }
            </div>
         );
    }
}
 
export default List;