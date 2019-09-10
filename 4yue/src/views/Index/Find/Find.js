import React, { Component } from 'react';
import List from "../../../components/List/List"
import axios from 'axios'
import '../../../mock/mock'
class Find extends Component {
    state = {
        carlist:[]
      }
      componentDidMount(){
        axios.get("/getlist").then(res=>{
            // console.log(res.data);
            this.setState({
                carlist:res.data
            })
        })
    }
    render() { 
        return ( <div className="find">
            <List carlist={this.state.carlist}></List>
        </div> );
    }
}
 
export default Find;