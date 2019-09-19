import React, { Component } from 'react';
import {connect} from 'react-redux'
import { TOPICIND,SUBMIT } from "../../store/types";
class Bottom extends Component {
    state = {  }
    render() { 
        let {ind} = this.props;
        return ( 
            <div className="bottom">
                <span onClick={this.handleclick.bind(this,ind-1)}>上一题</span>
                <span onClick={this.submit.bind(this)}>提交试卷</span>
                <span>收藏</span>
                <span onClick={this.handleclick.bind(this,ind+1)}>下一题</span>
            </div>
         );
    }
    handleclick(ind){
        if(ind>=0 && ind < this.props.length){
            this.props.changetopic(ind)
        } 
    }
    submit(){
        this.props.show()
        this.props.stopTimer()
        this.props.submit()
    }
}
 
export default connect(
    (state) => {
        return {
            ind:state.topic.ind,
            length:state.topic.length
        }
    },
    (dispatch) => {
        return {
            changetopic(ind){
                dispatch({type:TOPICIND,ind})
            },
            submit(){
                dispatch({type:SUBMIT})
            }
        }
    }
)(Bottom);