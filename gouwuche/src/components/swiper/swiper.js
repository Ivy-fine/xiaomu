import React, { Component } from 'react';
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
class Swiperban extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src={require("../../img/c1.png")} alt=""/>
                    </div>
                    <div className="swiper-slide">
                        <img src={require("../../img/s3.png")} alt=""/>
                    </div>
                    <div className="swiper-slide">
                        <img src={require("../../img/list1.png")} alt=""/>
                    </div>
                </div>
            </div>
         );
    }
    componentDidMount(){
        new Swiper('.swiper-container',{
            loop:true
        })
    }
}
 
export default Swiperban;