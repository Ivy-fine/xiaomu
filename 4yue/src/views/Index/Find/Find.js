import React, { Component } from 'react';
import List from "../../../components/List/List"
import { connect } from 'react-redux'
import {getlist} from '../../../store/reducer/listReducer/listaction'
class Find extends Component {
    state = { }
    componentDidMount() {
        this.props.loadlist()
    }
    render() {
        let {list} =this.props;
        return (<div className="find">
            <List carlist={list}></List>
        </div>);
    }
}

export default connect(
    (state) => {
        return {
            list:state.list
        }
    }, (dispatch) => {
        return {
            loadlist(){
                dispatch(getlist)
            }
        }
    }
)(Find);