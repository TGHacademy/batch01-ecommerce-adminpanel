
// eslint-disable-next-line no-unused-vars
import React  from 'react'
import './style.css'
import Login from './pages/Login'
import {BrowserRouter as Router,
  Route } 
  from 'react-router-dom'
import Forgot from './pages/Forgot'
import Reset from './pages/Reset'
import Add_product from './pages/Add_product'

import { Toaster } from 'react-hot-toast'
import product_list from './pages/product_list'



function App() {
  
  return (
    <div>
      <Router>
         <Route exact path='/' component ={Login}/>
         <Route exact path='/forgot' component={Forgot}/>  
         <Route exact path='/reset-password' component={Reset}/>
         <Route exact path='/add-product' component={Add_product}/>
         <Route exact path='/product-list' component={product_list}/>
      </Router>
      <Toaster />
    </div>
  )
}


export default App
