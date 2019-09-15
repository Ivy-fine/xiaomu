import React, { Component } from 'react';
import Header from '../../../components/header/header'
import '../../../css/classify.css'
import { connect } from 'react-redux'
import getlist from '../../../store/reducer/list/listaction'
class classify extends Component {
    state = {
        curIndex: 0
    }
    render() {
        let { curIndex } = this.state;
        let { list } = this.props;
        return (
            <div className="classify">
                <Header title={'分类'} />
                <div className="classifycont">
                    <div className="left">
                        {
                            list && list.map((item, index) => {
                                return <p key={index} className={curIndex === index ? 'active' : ''} onClick={() => {
                                    this.setState({ curIndex: index })
                                }}>{item.title}</p>
                            })
                        }
                    </div>
                    <div className="right">
                        <div className="ban">
                            <img src={require('../../../img/c1.png')} alt="" />
                        </div>
                        <div className="rightlist">
                            {
                                list.length > 0 && list[curIndex].children.map((item, index) => {
                                    return (
                                        <dl key={index} onClick={this.gotoDetail.bind(this, curIndex, index)}>
                                            <dt>
                                                <img src={require('../../../' + item.img)} alt="" />
                                            </dt>
                                            <dd>
                                                {item.title}
                                            </dd>
                                        </dl>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        );
    }
    componentDidMount() {
        this.props.getlist()
    }
    gotoDetail(curIndex, index) {
        this.props.history.push('/detail/' + curIndex + '/' + index)
    }
}

export default connect((state) => {
    return {
        list: state.list
    }
}, (dispatch) => {
    return {
        getlist() {
            dispatch(getlist)
        }
    }
})(classify);