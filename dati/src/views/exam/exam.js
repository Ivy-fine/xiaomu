import React, { Component } from 'react';
import Header from '../../components/header/header'
import Bottom from '../../components/bottom/bottom'
import { connect } from 'react-redux'
import { getlist } from '../../store/reducer/topicreducer/listaction'
import { SELECTOPT } from '../../store/types'
class Exam extends Component {
    state = {
        typeArr: ['单选', '多选', '判断'],
        optMark: ['A', 'B', 'C', 'D'],
        showDialog: false,
        timer: null,
        min: '00',
        sec: '00'
    }
    render() {
        // console.log(this.props) 
        let title = this.props.location.state.title
        let { curTopic, ind, duringtime, count } = this.props
        let { typeArr, optMark, showDialog, sec, min } = this.state
        return (
            <div className="exam">
                <Header title={title} sec={sec} min={min} />
                <div className="main">
                    {
                        curTopic && <>
                            <div className="topic">
                                第{ind + 1}题:{curTopic.topic}
                            </div>
                            <div className="options">
                                <p>{typeArr[curTopic.type]}(请选择正确答案)</p>
                                <div className="content">
                                    {
                                        curTopic.options && curTopic.options.map((item, index) => {
                                            return <p key={index} onClick = {this.selectopt.bind(this, item.id)}>
                                                <span
                                                    className={curTopic.selected !== "" && curTopic.correct === item.id ? 'correct' : (curTopic.selected === item.id ? 'error' : '')}
                                                ></span>
                                                <span>{optMark[index]}: {item.text}</span>
                                            </p>
                                        })
                                    }
                                </div>
                            </div>
                        </>
                    }
                </div>
                {
                    showDialog &&
                    <div className="mark">
                        <div className="dialog">
                            <p>用时{duringtime},答对{count}题</p>
                            <button onClick={() => { this.setState({ showDialog: false }) }}>关闭</button>
                        </div>
                    </div>
                }
                <Bottom show={this.show.bind(this)} stopTimer={this.stopTimer.bind(this)} />
            </div>
        );
    }
    componentDidMount() {
        this.props.getlist()
        let timer = setInterval(() => {
            let time = (new Date() * 1 - this.props.startTime + 1000) / 1000;
            let sec = Math.floor(time % 60)
            let min = Math.floor(time / 60 % 60)
            this.setState({
                min: min > 10 ? min : '0' + min,
                sec: sec > 10 ? sec : '0' + sec
            })
        }, 1000)
        this.setState({ timer })
    }
    selectopt(id) {
        this.props.selectopt(id)
    }
    show() {
        this.setState({ showDialog: true })
    }
    stopTimer() {
        clearInterval(this.state.timer)
    }
    componentWillUnmount() {
        this.stopTimer()
    }
}

export default connect(
    (state) => {
        return {
            curTopic: state.topic.curTopic,
            ind: state.topic.ind,
            duringtime: state.topic.duringtime,
            count: state.topic.count,
            startTime: state.topic.startTime
        }
    },
    (dispatch) => {
        return {
            getlist() {
                dispatch(getlist)
            },
            selectopt(id) {
                dispatch({ type: SELECTOPT, id })
            }
        }
    }
)(Exam);