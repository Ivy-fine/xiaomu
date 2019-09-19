import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
class Header extends Component {
    state = {}
    render() {
        let { title, ind, length, sec, min } = this.props;
        return (
            <div className="header">
                <b onClick={() => { this.props.history.go(-1) }}>&lt;</b>
                <p>科一{title}</p>
                <div>
                    <span>{min}:{sec}</span>
                    <span>{ind + 1}/{length}</span>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            ind: state.topic.ind,
            length: state.topic.length
        }
    },
    (dispatch) => {
        return {  }
    }
)(withRouter(Header));