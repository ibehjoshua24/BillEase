import React from 'react'
import Form from 'react-bootstrap/Form';
import './Login.css'

const Login = () => {
  return (
    <>
        <div className='login'>
            <div className='boxs'>
            <h1>BillEase</h1>
            <h4>Login.</h4>
            <p>Sign in to your account to continue.</p>
            <div className='forms'>
                <div>
                <Form.Label>Username</Form.Label>
                {/* <Form.Control type="text" placeholder="Normal text" /> */}
                <Form.Control id='input' size="lg" type="text" placeholder="Enter your username" />
                </div>
                <div>
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                {/* <Form.Control
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock" /> */}
                    <Form.Control id='input' size="lg" type="text" placeholder="Enter your password" />
                </div>  
                <a id='links' href="">Forgot your password?</a>
            <button>Log In</button>
            <p>Don't have an account <a id='links' href="/SignUp"><span>Sign Up</span></a></p>  
            </div>
            </div>
        </div>
    </>
  )
}

export default Login