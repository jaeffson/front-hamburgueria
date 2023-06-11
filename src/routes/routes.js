import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from "../Containers/Login";
import Register from "../Containers/Register";
import Home from "../Containers/home";
import PrivateRoute from "./private-route";
import Product from "../Containers/Products";


function MyRoutes() {
    return (
        <Router>
            <Routes>
               <Route element ={<PrivateRoute/>}>
            <Route exact path = "/" element ={<Home/>}/>
            </Route> 
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/produtos" element={<Product />} />

            </Routes>
        </Router>
    )
}
export default MyRoutes;
