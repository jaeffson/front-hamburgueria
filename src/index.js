import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer, Zoom} from 'react-toastify';
import Routes from './routes/routes'

import Globalstyles from './styles/globalstyles'
import AppProvider from './hooks';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
  <AppProvider>
    <Routes></Routes>
 <Globalstyles></Globalstyles>
  </AppProvider>
  <ToastContainer transition={Zoom} autoClose={2000}/>
  </>
)
