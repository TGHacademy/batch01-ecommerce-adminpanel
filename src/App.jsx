import { useState } from 'react'
import './App.css'
import logo from "/src/assets/Logo.svg"
import bgimage from "/src/assets/Frame 160.svg"

function App() {
  const [count, setCount] = useState()

  return (
   <div className='login'>
    <img src={bgimage}  />
    <form>
     
      <div className='container'>
      <img src= {logo}/>
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
