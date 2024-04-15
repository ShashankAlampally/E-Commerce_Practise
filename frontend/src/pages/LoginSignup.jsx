import React from 'react'
import './CSS/LoginSignup.css'

function LoginSignup() {
  return (
    <div className='LoginSignup'>
      <div className='LoginSignup-Container'>
        <h1>Sign-up</h1>
        <div className='LoginSignup-fields'>
        <input type='text' placeholder='Enter Your Name'/>
        <input type='email' placeholder='Enter Your Email'/>
        <input type='password' placeholder='Password'/>
        
        </div>
        <button>Continue</button>
        <p className='LoginSignup-login'>
        Already have an account?<span>Login</span>
        </p>
        <div className='LoginSignup-agree'>
        <input type='checkbox' name="" id="" />
        <p>By Continuing , I agree to the terms and policies</p>
        </div>
      </div>
    
    </div>
  )
}

export default LoginSignup