import React from 'react';
function Header(props){
    return <>
        <h3 className="header">
            {props.title}
        </h3>
    </>
}
export default Header;