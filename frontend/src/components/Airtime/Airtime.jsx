import React from 'react'
import Form from 'react-bootstrap/Form';
import '../Airtime/Airtime.css'
import Header from '../users/Header';
import Dashboard from '../users/Dashboard';



const Airtime = () => {
  return (
    <div>
        <Header/>
        <Dashboard/>
    <div  className='airtime'>
        <h2>Airtime TopUp</h2>
        <div className='airtimes'>
        <div>
        <Form.Label>Network</Form.Label>
        <Form.Control size="text" type="text" placeholder="Large text" />
        </div>
        <div>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control size="text" type="text" placeholder="Large text" />
        </div>
        <div>
        <Form.Label>Amount</Form.Label>
        <Form.Control size="text" type="text" placeholder="Large text" />
        </div>
            <button>Buy Now</button>
        </div>
    </div>
    </div>
  )
}

export default Airtime