import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import routes from './routerConfig'
import Routerview from './routerview'
function Router(){
    
    return <BrowserRouter>
        <Routerview routes={routes}></Routerview>
    </BrowserRouter>
}

export default Router;