import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'


import { Home, Login, Product, Register, Cart, Admin } from '../Containers'
import PrivateRoute from './private-route'
import paths from '../constants.js/path'

function Navigates() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path={paths.Login} />
        <Route element={<Register />} path={paths.Register} />
        <Route
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
          path={paths.Home}
        />
        <Route
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
          path={paths.Products}
        />
        <Route
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
          path={paths.Cart}
        />
        <Route
          element={
            <PrivateRoute>
              <Admin isAdmin />
            </PrivateRoute>
          }
          path={paths.Order}
        />
        <Route
          element={
            <PrivateRoute>
              <Admin isAdmin />
            </PrivateRoute>
          }
          path={paths.Admin}
        />
        <Route
          element={
            <PrivateRoute>
              <Admin isAdmin />
            </PrivateRoute>
          }
          path={paths.ListProducts}
        />
        <Route
          element={
            <PrivateRoute>
              <Admin isAdmin />
            </PrivateRoute>
          }
          path={paths.EditProduct}
        />
            <Route
          element={
            <PrivateRoute>
              <Admin isAdmin />
            </PrivateRoute>
          }
          path={paths.NewProduct}
        />
      </Routes>
    </Router>
  )
}

export default Navigates