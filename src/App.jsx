import { useState } from 'react'
import './App.css'
import logo from "/src/assets/Logo.svg"
import bgimage from "/src/assets/Frame 160.svg"

function App() {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [password, setPassword] = useState('');
  const[message,setMessage]=useState('');
  
  
  const handleUsernameChange=(e)=>{
    setUsernameError('');
    setUsername(e.target.value);
  }
  const handlePasswordChange=(e)=>{ 
   
    setPassword(e.target.value);
  }
  const handleFormSubmit=(e)=>{
    const regExp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    e.preventDefault();

    if(username!==''){

    }
    else{
      setUsernameError('Username Required');
    }
    if(password ===''){
      setMessage("Please enter password");
    }
    else if(regExp.test(password)){
      setMessage("Password is Valid");
    }
    else if(!regExp.test(password)){
      setMessage("Password is  not Valid");
      
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
     <p className='error-msg'>{message}</p>
     <button type='submit' >Login</button>
      </div>
      
    </form>

   </div>
  )
}

export default App
