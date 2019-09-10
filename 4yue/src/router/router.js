import React from 'react'
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom'
import Index from "../views/Index/Index"
import Search from "../views/Search/Search"
import My from "../views/My/My"
import Login from "../views/Login/Login"
function Router(){
    return <BrowserRouter>
        <Switch>
            <Route path="/index" component={Index}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/my" component={My}></Route>
            <Redirect from="/" to="/index"></Redirect>
        </Switch>
    </BrowserRouter>
}

export default Router;