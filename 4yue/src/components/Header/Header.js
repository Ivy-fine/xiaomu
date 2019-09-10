import React, { Component } from 'react';
import { NavLink,withRouter } from "react-router-dom";
import "../../css/Header.css"
class Header extends Component {
    state = { 
        showMore:false,
        sticky:false
     }
     componentDidMount(){
         document.addEventListener('scroll',this.handleScroll)
     }
     handleScroll=()=>{
         if(document.documentElement.scrollTop > 40){
             this.setState({
                 sticky:true
             })
         }else{
             this.setState({sticky:false})
         }
     }
     show=()=>{
         this.setState({
             showMore:true
         })
     }
     hide=()=>{
         this.setState({
             showMore:false
         })
     }
    render() { 
        let {navlist} =this.props;
        // console.log(navlist);
        
        return ( <>
            <div className="title">
                <div className="logo">汽车之家</div>
                <div className="search" onClick={()=>{
                    this.props.history.push("/search")
                }}>search</div>
                <div className="my" onClick={()=>{
                    this.props.history.push("/my")
                }}>my</div>
            </div>
            <div className={this.state.sticky ? "nav navsticky":'nav'}>
                <ul>
                    {
                        navlist.map((item,index)=>{
                            return (
                                <li key={index}><NavLink to={item.link}>{item.text}</NavLink></li>
                            )
                        })
                    }
                </ul>
                <img src={require("../../img/icon.svg")} alt="" onClick={this.show} className={this.state.showMore?"show":''}/>
            </div>
           {
               this.state.showMore &&
                <div className="mark" onClick={this.hide}>
                <div className={this.state.sticky ? "more moresticky":'more'} onClick={(e)=>{e.stopPropagation()}}>
                    <p>金融</p>
                    <p>车商城</p>
                </div>
            </div>}
        </> );
    }
}
 
export default withRouter(Header);