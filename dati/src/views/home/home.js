import React, { Component } from 'react';
import {connect} from 'react-redux'
class Home extends Component {
    state = { 
        navlist:[
            {
                title:'模拟考试',
                type:'moni'
            },{
                title:'收藏练习',
                type:'shoucang'
            }
        ]
     }
    render() { 
        let {navlist} = this.state;
        return ( 
            <div className="home">
                <div className="nav">
                    {
                        navlist.map((item,index)=>{
                            return <span key={index} onClick={this.gotoExam.bind(this,item.title,item.type)}>{item.title}</span>
                        })
                    }
                    <span></span>
                </div>
            </div>
         );
    }
    gotoExam(title,type){
        this.props.history.push({pathname:"/exam",state:{title}})
    }
}
 
export default connect(
    (state)=>{
        return{
        }
    },
    (dispatch)=>{
        return {}
    }
)(Home);