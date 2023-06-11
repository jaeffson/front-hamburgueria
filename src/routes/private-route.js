/* eslint-disable no-unused-vars */
//eslint-disable-next-line
//eslint-disable-next-line
import PropTypes from 'prop-types';
import React from "react";
import {Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const user = localStorage.getItem('burger:userData')
    return user ? <Outlet/> : <Navigate to = "/login"/>
}


PrivateRoute.propTypes = {
    element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
};
export default PrivateRoute