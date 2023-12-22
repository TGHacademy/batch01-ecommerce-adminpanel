import { } from 'react'
import './forgot.css'
import logo from "/src/assets/Logo.svg"
import bgimage from "/src/assets/Frame 160.svg"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Forgot() {
  
    
    return (
        <div className='forgot'>
            <img src={bgimage} />
            <form >

                <div className='container'>
                    <img src={logo} />
                    <h1>Forgot Password</h1>
                    <p>We will send a reset link to this email</p>
                    <label className='email'>Email</label>
                    <input type='email' placeholder='Enter Email' />
                    <Link to="/Reset">
                    <button type='submit' >Send Reset Link</button>
               </Link>
                </div>

            </form>
        </div>
    )
}

export default Forgot
