import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState()

  return (
   <div className='login'>
      <img src= "assets/Logo.svg"></img>
    <form>
     
      <div className='container'>
      <h1>Login as admin</h1>
     
      <label className='username'>Username</label>
      <input type='text' onChange={(e)=>{setUsername(e.target.value)}} placeholder='Username' />
      <label className='password'>Password</label>
      <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
     <button type='submit' >Login</button>
      </div>
      
    </form>

   </div>
  )
}

export default App
