import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
function Routerview(props) {
    
    let routeArr = props.routes.filter(item => !item.redirect)
    let redirectArr = props.routes.filter(item => item.redirect)
    return (
        <Switch>
            {
                routeArr && routeArr.map((item, index) => {
                    return <Route path={item.path} key={index} render={(props) => <item.component {...props} child={item.children} />}></Route>
                })
            }
            {
                redirectArr && redirectArr.map((item, index) => {
                    return <Redirect from={item.path} key={index} to={item.redirect}></Redirect>
                })
            }
        </Switch>
    );
}

export default Routerview;