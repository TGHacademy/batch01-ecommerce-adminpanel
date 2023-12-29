import { useState} from 'react'
import logo from "/src/assets/Logo.svg"
import bgimage from "/src/assets/Frame 160.svg"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Forgot() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleForgotPassword = async () => {
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred while processing your request.');
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
                    <Link to="/Reset">
                    <button type='submit'onClick={handleForgotPassword}  className='btn-forgot'>Send Reset Link</button>
               </Link>
               {message && <p>{message}</p>}
                </div>

            </form>
        </div>
    )
}

export default Forgot
