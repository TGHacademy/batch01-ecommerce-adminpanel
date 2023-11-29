import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='login'>
    <h1>Login as admin</h1>

    <form action='POST'>
      <input type='text' onChange={(e)=>{setUsername(e.target.value)}} placeholder='Username' />
      <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
      <input type='submit' />
    </form>

   </div>
  )
}

export default App
