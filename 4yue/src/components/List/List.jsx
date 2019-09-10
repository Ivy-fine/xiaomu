import React, { Component } from 'react';
class List extends Component {
    state = {}
    render() {
        let carlist = this.props.carlist;
        
        let title = Object.keys(carlist)
        return (
            <div className="list">
                {
                    title.map((item, index) => {
                        return (
                            <div className="item" key={index} ref={'item_'+item}>
                                <h5>{item}</h5>
                                <ul>
                                    {
                                        carlist[item].map((val, ind) => {
                                            return (
                                                <li key={ind}>
                                                    <div className="img">
                                                        <img src={val.CoverPhoto} alt="" />
                                                    </div>
                                                    <span>{val.Name}</span>
                                                </li>
                                            )
                                        })

                                    }
                                </ul>
                            </div>
                        )
                    })
                }
               <ol className="letterNav">
               {
                    title.map((item,index)=>{
                        return <li key={index} onClick={()=>{this.scTo(item)}}>{item}</li>
                    })
                }
               </ol>
            </div>
        );
    }
    
    scTo=(item)=>{
        // console.log(this.refs['item_'+item])
        // console.log(item)
        document.documentElement.scrollTop = this.refs['item_'+item].offsetTop - 40
    }
}

export default List;