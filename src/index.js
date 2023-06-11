import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer, Zoom} from 'react-toastify';
import Routes from './routes/routes'

import Globalstyles from './styles/globalstyles'
import {UserProvider} from './hooks/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
  <UserProvider>
    <Routes></Routes>
 <Globalstyles></Globalstyles>
  </UserProvider>
  <ToastContainer transition={Zoom} autoClose={2000}/>
  </>
)
