import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
function RouterView(props) {
    let { routes } = props;
    let routeArr = routes.filter(item => !item.redirect)
    let redirectArr = routes.filter(item => item.redirect)
    return <Switch>
        {
            routeArr && routeArr.map((item, index) => {
                return <Route key={index} path={item.path} render={(props) => <item.component {...props} childroutes={item.children}/>}></Route>
            })
        }
        {
            redirectArr && redirectArr.map((item, index) => {
                return <Redirect from={item.path} to={item.redirect} key={index}></Redirect>
            })
        }
    </Switch>
}

export default RouterView;