import { useState } from 'react'
import logo from "/src/assets/Logo.svg"
import bgimage from "/src/assets/Frame 160.svg"
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function Login() {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const handleUsernameChange = (e) => {
        setUsernameError('');
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPasswordError('');
        setPassword(e.target.value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (username !== '') { /* empty */ }
        else {
            setUsernameError('Please enter username');
        }
        if (password !== '') { /* empty */ }
        else {
            setPasswordError("Please enter password");
        }

    }
    const handleLogin = async () => {
        try {
            const response = await fetch('https://academy-batch-1-project-683989f58497.herokuapp.com/api/auth/admin-login', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                localStorage.setItem("Token", JSON.stringify(data.token))
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
            <img  className='shop-img'src={bgimage} />
            <form onSubmit={handleFormSubmit}>
                <div className='container'>
                    <img  className='logo-img'src={logo} />
                    <h1 className='login-h1'>Login as admin</h1>
                    <label className='username'>Username</label>
                    <input type='email'  className='input-username' onChange={handleUsernameChange} placeholder='Username' />
                    {usernameError && <div className='error-msg'>{usernameError}</div>}
                    <label className='password'>Password</label>
                    <input type='password'  className='input-password'onChange={handlePasswordChange} placeholder='Password' />
                    {passwordError && <div className='error-msg'>{passwordError}</div>}
                    <Link to='/Forgot' className='link-forgot'>Forgot password</Link>
                    <button onClick={handleLogin} type='submit'  className='btn-login'>Login</button>
                </div>
            </form>

          
        </div>
    )
}

export default Login

