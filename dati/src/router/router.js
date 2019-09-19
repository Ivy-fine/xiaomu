import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import Routerview from './routerview'
import routes from './routerConfig'
function Router (){
    return <BrowserRouter>
        <Routerview routes={routes}/>
    </BrowserRouter>
}

export default Router;