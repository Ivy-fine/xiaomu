import React, { Component } from 'react';
class Header extends Component {
    state = {  }
    render() { 
        let title = this.props.title;
        return ( 
            <div className="header">
                <span>{title}</span>
            </div>
         );
    }
}
 
export default Header;