import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Store from './store/store';


const Router = () =>{
    return(
        <BrowserRouter>
            <Route path="/" component={Store}/>
        </BrowserRouter>
    )
}

export default Router