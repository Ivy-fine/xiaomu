import React, { Component } from 'react';
import {connect} from 'react-redux'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
class Home extends Component {
    state = { 
        navlist:[
            {
                title:'模拟考试',
                type:'moni',
                color:'#fcc'
            },{
                title:'收藏练习',
                type:'shoucang',
                color:'#cfc'
            }
        ],
        imgs:[
            '7.jpg',
            '8.jpg',
            '9.jpg'
        ]
     }
    render() { 
        let {navlist,imgs} = this.state;
        return ( 
            <div className="home">
                <div className="banner">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                imgs.map((item,index)=>{
                                    return <div className="swiper-slide" key={index}>
                                        <img src={require('../../img/'+item)} alt=""/>
                                </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="nav">
                    {
                        navlist.map((item,index)=>{
                            return <span key={index} onClick={this.gotoExam.bind(this,item.title,item.type)} style={{background:item.color}}>{item.title}</span>
                        })
                    }
                </div>
            </div>
         );
    }
    gotoExam(title,type){
        this.props.history.push({pathname:"/exam",state:{title}})
    }
    componentDidMount(){
        new Swiper('.swiper-container',{
            loop:true
        })
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