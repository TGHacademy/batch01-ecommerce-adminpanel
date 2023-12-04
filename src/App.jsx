import { useState } from 'react'
import './App.css'
import logo from "/src/assets/Logo.svg"
import bgimage from "/src/assets/Frame 160.svg"

function App() {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  

  const handleUsernameChange=(e)=>{
    setSuccessMsg('');
    setUsernameError('');
    setUsername(e.target.value);
  }
  const handlePasswordChange=(e)=>{
    setSuccessMsg('');
    setPasswordError('');
    setPassword(e.target.value);
  }
  const handleFormSubmit=(e)=>{
    e.preventDefault();

    if(username!==''){

    }
    else{
      setUsernameError('Username Required');
    }
    if(password!==''){

    }
    else{
      setPasswordError('Password Required');
    }

  }
  return (
   <div className='login'>
    <img src={bgimage}  />
    <form onSubmit={handleFormSubmit}>
      <div className='container'>
      <img src= {logo}/>
      <h1>Login as admin</h1>

     
      <label className='username'>Username</label>
      <input type='text' onChange={handleUsernameChange} placeholder='Username' />
      {usernameError&&<div  className='error-msg'>{usernameError}</div>}
      <label className='password'>Password</label>
      <input type='password' onChange={handlePasswordChange} placeholder='Password'/>
      {passwordError&&<div  className='error-msg'>{passwordError}</div>}
     <button type='submit' >Login</button>
      </div>
      
    </form>

   </div>
  )
}

export default App
