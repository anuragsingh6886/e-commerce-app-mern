import React, { useState} from "react";

const ForgetPassword = () => {
    const [email, setEmail] = useState('');

    const handleReset = (e) => {
        e.preventDefault();
        //custom logic here
        console.log('Custom login with:', email);
    };

    return (
        <div className='m-lg-4 m-1 p-lg-4 p-1 d-flex flex-column align-items-center w-100 login-page'>
            <div className="custom-login">
                <form onSubmit={handleReset}>
                <p className="forgot-password mt-3 d-flex justify-content-end">Please enter the email address associated with your account. Well promptly send you a link to reset your password.</p>
                    <div className="email-sec d-flex flex-column mb-2">
                        <label>Email</label>
                        <input type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <button className='login-btn-custom w-100 mt-3' type="submit">Send reset link</button>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword;