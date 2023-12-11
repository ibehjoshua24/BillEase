import React from 'react'
import Form from 'react-bootstrap/Form';
import '../FundWallet/PayOnline.css'
import Header from '../users/Header';
import Dashboard from '../users/Dashboard';

const PayOnline = () => {
  return (
    <div>
        <Header/>
        <Dashboard/>
    <div className='payonline'>  
        <h2>Fund account with paystack</h2>
        <div className='pays'>
        <div>
        <Form.Label>Amount</Form.Label>
        <Form.Control size="text" type="text" placeholder="Large text" />
        <div className='charge'>
            <p>Transaction charge</p>
            <p>200</p>
        </div>
        <div className='total'>
            <p>Total</p>
            <p>300</p>
        </div>
        </div>
        <button>Continue to Funding</button>
        </div>
    </div>
    </div>
  )
}

export default PayOnline