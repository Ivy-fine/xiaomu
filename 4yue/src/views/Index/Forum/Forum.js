import React, { Component } from 'react';
import {connect} from 'react-redux'
class Forum extends Component {
    state = { val:'' }
    render() { 
        let { count,vlist } = this.props;
        let { val } = this.state;
        return ( <div>
            <button onClick={this.handleSub.bind(this)}> - </button>
            <span> {count} </span>
            <button onClick={this.handleAdd.bind(this)}> + </button>

            <input type="text" value={val} onChange={this.handleChange.bind(this)} onKeyDown={this.handleDown.bind(this)}/>
            {
                vlist.map((item,index)=>{
                    return <p key={index} onClick={this.handleDelete.bind(this,index)}>{item}</p>
                })
            }
        </div> );
    }
    handleAdd(){
        this.props.add()
    }
    handleSub(){
        this.props.sub()
    }
    handleChange(e){
        this.setState({val:e.target.value})
    }
    handleDown(e){
        if(e.keyCode === 13){
            this.props.insert(this.state.val)
        }
    }
    handleDelete(ind){
        this.props.delete(ind)
    }
}
 
export default connect((state)=>{
    return {
        count:state.count,
        vlist:state.vlist
    }
},(dispatch)=>{
    return {
        add(){
            dispatch({type:'ADD'})
        },
        sub(){
            dispatch({type:'SUB'})
        },
        insert(val){
            dispatch({type:'INSERT',val})
        },
        delete(ind){
            dispatch({type:'DELETE',ind})
        }
    }
})(Forum);