import React from 'react';
import Routerview from './routerview'
import routes from './routerConfig'
function Router(){
    return <Routerview routes={routes}/>
}
export default Router;