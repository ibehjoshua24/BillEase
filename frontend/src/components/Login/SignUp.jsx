import React from 'react'
import Form from 'react-bootstrap/Form';
import './Login.css'

const SignUp = () => {
  return (
    <>
       <div className='signup'>
        <div className='signs'>
        <h1>BillEase</h1>
        <h3>Create account.</h3>
        <div>
        <Form.Label>Fullname*</Form.Label>
        <Form.Control id='input' size="lg" type="text" placeholder="Enter your fullname" />
        </div>
        <div>
        <Form.Label>Username*</Form.Label>
        <Form.Control id='input' size="lg" type="text" placeholder="Enter your Username" />
        </div>
        <div>
        <Form.Label>Email*</Form.Label>
        <Form.Control id='input' size="lg" type="email" placeholder="Enter your Email" />
        </div>
        <div>
        <Form.Label>Phone*</Form.Label>
        <Form.Control id='input' size="lg" type="number" placeholder="Enter your Phone number" />
        </div>
        <div>
        <Form.Label>Referal code [optional]</Form.Label>
        <Form.Control id='input' size="lg" type="number" placeholder="Enter your code" />
        </div>
        <div>
        <Form.Label>Password*</Form.Label>
        <Form.Control id='input' size="lg" type="password" placeholder="Enter your Password" />
        </div>
        <div>
        <Form.Label>Confirm Password*</Form.Label>
        <Form.Control id='input' size="lg" type="password" placeholder="Enter your Password" />
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              <a id='terms'href="">I agree to the terms and condition</a>
            </label>
          </div>
        <button>Create My Account</button>
        <p>Already have an account? <a id='terms' href="/Login">Sign In</a></p>
        </div>
      </div> 
    </>
  )
}

export default SignUp