import { useState } from 'react'
import './App.css'
import logo from "/src/assets/Logo.svg"
import bgimage from "/src/assets/Frame 160.svg"
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
 
  
  const handleUsernameChange=(e)=>{
    setUsernameError('');
    setUsername(e.target.value);
  }
  const handlePasswordChange=(e)=>{ 
    setPasswordError('');
    setPassword(e.target.value);
  }
  const handleFormSubmit=(e)=>{
    e.preventDefault();

    if(username!==''){ /* empty */ }
    else{
      setUsernameError('Please enter username');
    }
    if(password !==''){ /* empty */ }
    else
    {
      setPasswordError("Please enter password");
    }

  }

  
  // useEffect(() => {
  //   const fetchLink = async () => {
  //     try {
  //       const response = await fetch('https://academy-batch-1-project-683989f58497.herokuapp.com/');
  //       if (response.ok) {
  //         const linkData = await response.json();
  //         setApiLink(linkData.link);
  //       } else {
  //         console.error('Failed to fetch link from backend');
  //       }
  //     } catch (error) {
  //       console.error('Error during link fetch:', error);
  //     }
  //   };
  //   fetchLink();
  // }, []); 

  const handleLogin = async () => {
    try {
      const response = await fetch('https://academy-batch-1-project-683989f58497.herokuapp.com/api/auth/admin-login', {
        
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data= await response.json();
      console.log(data);
      if (response.ok) {
        localStorage.setItem("Token",JSON.stringify(data.token))
        console.log('Login successful!');
        toast.success('Successfully Login!');
      } else {
         console.error('Login failed');
         toast.error(data.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
      
    }
  };
  return (
   <div className='login'>
    <img src={bgimage}  />
    <form onSubmit={handleFormSubmit}>
      <div className='container'>
      <img src= {logo}/> 
      <h1>Login as admin</h1>

     
      <label className='username'>Username</label>
      <input type='email' onChange={handleUsernameChange} placeholder='Username' />
      {usernameError&&<div  className='error-msg'>{usernameError}</div>}
      <label className='password'>Password</label>
      <input type='password' onChange={handlePasswordChange} placeholder='Password'/>
      {passwordError&&<div  className='error-msg'>{passwordError}</div>}
     <button  onClick={handleLogin}type='submit' >Login</button>
      </div>
      
    </form>
    <Toaster />
   </div>
  )
}

export default App
