import { } from 'react'
import logo from "/src/assets/Logo.svg"
import bgimage from "/src/assets/Frame 160.svg"

function Reset() {


    return(
        <div className='reset'>
            <img src={bgimage} />
            <form >
                <div className='container'>
                    <img src={logo} />
                    <h1>Reset Password</h1>

                    <label className='new'>New Password</label>
                    <input type='password' placeholder='Enter' />
                    <label className='confirm'>Confirm Password</label>
                    <input type='password' placeholder='Enter' />

                    <button type='submit' >Confirm</button>
                </div>

            </form>
        </div>
    )
}
export default Reset