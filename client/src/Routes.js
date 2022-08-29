import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import  App  from './pages/App';
import { App2 } from './pages/App2';

export function AppRoutes() {
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>            
                <Route path="/2" element={<App2 />}/>            
            </Routes>
        </BrowserRouter>
    )
}