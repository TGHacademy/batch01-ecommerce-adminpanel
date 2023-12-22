
// eslint-disable-next-line no-unused-vars
import React  from 'react'
import Login from './Login'
import {BrowserRouter as Router,
  Route } 
  from 'react-router-dom'
import Forgot from './Forgot'
import Reset from './Reset'



function App() {
  
  return (
    <div>
      <Router>
         <Route exact path='/' component ={Login}/>
         <Route exact path='/forgot' component={Forgot}/>  
         <Route exact path='/reset' component={Reset}/>
      </Router>
    </div>
  )
}

export default App
