import React from 'react'
import loginpng from '../images/login_img.png'
import './signup.css'

function Signup({toggleLogin}) {
    return (
        <div>
            <div className='row '>
                <div className='col-4 left-login text-light'>
                    <div className='p-3'>
                        <h2>Looks like you're new here!</h2>
                        <p>Sign up with your mobile number to get started</p>
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
                            <button className='otp-btn'>CONTINUE</button>
                        </div>
                        <div className='create text-center fw-bold' onClick={()=>toggleLogin()}>
                            <p>Existing user? Log in</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup