import React, { useState} from "react";
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        //custom logic here
        console.log('Custom login with:', name, email, password);
    };

    return (
        <div className='m-lg-4 m-1 p-lg-4 p-1 d-flex flex-column align-items-center w-100 login-page'>
            <div className="custom-login">
                <form onSubmit={handleSignup}>
                <div className="email-sec d-flex flex-column mb-2">
                        <label>Name</label>
                        <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="email-sec d-flex flex-column mb-2">
                        <label>Email</label>
                        <input type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="password-sec d-flex flex-column">
                        <label>Password</label>
                        <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <p className="forgot-password mt-3 d-flex justify-content-end">By creating an account you agree with our Terms of Service, Privacy Policy,
                    </p>
                    <button className='login-btn-custom w-100 mt-3' type="submit">Create account</button>
                </form>
                <p className="dont-have-account mt-3 d-flex justify-content-center gap-1 align-items-center">Already have an account? <Link to="/login"><a href="#">Log in</a></Link></p>
            </div>
        </div>
    )
}

export default Signup;