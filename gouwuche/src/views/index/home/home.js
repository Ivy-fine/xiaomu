import React, { Component } from 'react';
import Header from '../../../components/header/header'
import Swiper from '../../../components/swiper/swiper'
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header title={'零食商贩'}/>
                <Swiper/>
            </div>
         );
    }
}
 
export default Home;