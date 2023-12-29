import { } from 'react'
import logo from "/src/assets/Logo.svg"
import bgimage from "/src/assets/Frame 160.svg"

function Reset() {


    return(
        <div className='reset'>
            <img  className='shop-img3' src={bgimage} />
            <form >
                <div className='reset-container'>
                    <img className='logo-img3'  src={logo} />
                    <h1 className='reset-h1'>Reset Password</h1>

                    <label className='new'>New Password</label>
                    <input  className='input-newpass'type='password' placeholder='Enter' />
                    <label className='confirm'>Confirm Password</label>
                    <input type='password'  className='input-cnfrm'placeholder='Enter' />

                    <button type='submit' className='btn-reset'>Confirm</button>
                </div>

            </form>
        </div>
    )
}
export default Reset