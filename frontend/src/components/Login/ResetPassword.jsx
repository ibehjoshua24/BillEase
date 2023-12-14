import React from 'react'
import Form from 'react-bootstrap/Form';
import './Login.css'


const ResetPassword = () => {
  return (
    <>
    <div className='reset'>
        <div className='set'>
            <h3>Forgot Password ?</h3>
            <Form.Label>Email*</Form.Label>
            <Form.Control id='input' size="lg" type="Email" placeholder="Enter your Email" />
            <button>Reset Password</button>
        </div>
    </div>
    </>
  )
}

export default ResetPassword