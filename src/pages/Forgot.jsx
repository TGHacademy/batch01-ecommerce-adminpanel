import { useState} from 'react'
import logo from "/src/assets/Logo.svg"
import bgimage from "/src/assets/Frame 160.svg"
import toast from 'react-hot-toast';


function Forgot() {
  const [email, setEmail] = useState('');
 
 

  const handleForgotPassword = async () => {
    try {
      const response = await fetch('https://academy-batch-1-project-683989f58497.herokuapp.com/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message); 
       
       
      } else {
        const errorData = await response.json();
        toast.error(errorData.message); 
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred');
    }
  };

    
    return (
        <div className='forgot'>
            <img  className='shop-img2'src={bgimage} />
            <form >

                <div className='forgot-container'>
                    <img  className='logo-img2'src={logo} />
                    <h1 className='forgot-h1'>Forgot Password</h1>
                    <p className='forgot-p'>We will send a reset link to this email</p>
                    <label className='email'>Email</label>
                    <input  className='input-email'type='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/>
                   
                    
            <button type='button' onClick={handleForgotPassword} className='btn-forgot'>
              Send Reset Link
            </button>
          
               
                </div>

            </form>
        </div>
    )
}

export default Forgot
