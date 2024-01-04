import { } from 'react'
import { useState } from 'react';
import logo from "/src/assets/Logo.svg"
import bgimage from "/src/assets/Frame 160.svg"

function Reset() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      
      if (newPassword === '' || confirmPassword === '') {
        alert('Please fill in both password fields');
        return;
      }
  
      
      const apiEndpoint = '';
  
      try {
        
        const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            newPassword,
            confirmPassword,
          }),
        });
  
        if (response.ok) {
        
          alert('Password reset successful!');
        } else {
         
          alert('Password reset failed. Please try again.');
        }
      } catch (error) {
       
        console.error('Error:', error);
      }
    };

    return(
        <div className='reset'>
            <img  className='shop-img3' src={bgimage} />
            <form >
                <div className='reset-container'>
                    <img className='logo-img3'  src={logo} />
                    <h1 className='reset-h1'>Reset Password</h1>

                    <label className='new'>New Password</label>
                    <input  className='input-newpass'type='password' placeholder='Enter'  onChange={(e) => setNewPassword(e.target.value)}/>
                    <label className='confirm'>Confirm Password</label>
                    <input type='password'  className='input-cnfrm'placeholder='Enter' onChange={(e) => setConfirmPassword(e.target.value)} />

                    <button type='submit' onClick={handleFormSubmit} className='btn-reset'>Confirm</button>
                </div>

            </form>
        </div>
    )
}
export default Reset