import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import RouterView from "./routerview"
import routes from './routerConfig'
function Router() {
    return (
        <BrowserRouter>
            <RouterView routes={routes} />
        </BrowserRouter>
    );
}

export default Router;