import React from 'react'
import loginpng from '../images/login_img.png'
import './login.css'
function Login({toggleSignup}) {
    return (
        <div>
            <div className='row '>
                <div className='col-4 left-login text-light'>
                    <div className='p-5'>
                        <h2>Log In</h2>
                        <p>Get access to your Orders, Wishlist and Recommendations</p>
                    </div>
                    <div className='text-center mt-5'>
                        <img src={loginpng} />
                    </div>
                </div>
                <div className='col-8 right-login'>
                    <div className='container w-75 m-auto mt-5'>
                        <input className='login-input mb-4' placeholder='Enter Your Email/Mobile Number'></input>
                        <p className='text-secondary'>By continuing, you agree to Lifestyle's Terms of Use and Privacy Policy.</p>
                        <div className='otp'>
                            <button className='otp-btn'>REQUEST OTP</button>
                        </div>
                        <div className='create text-center fw-bold' onClick={()=>toggleSignup()}>
                            <p>New to Lifestyle ? Create an Account</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login