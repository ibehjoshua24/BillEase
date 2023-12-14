import React from 'react'
import Form from 'react-bootstrap/Form';
import '../Airtime/Airtime.css'
import Header from '../users/Header';
import Dashboard from '../users/Dashboard';
import { useState } from 'react';



const Airtime = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedName, setSelectedName] = useState('')
   
  const handleToggle = () => {
    setIsOpen(!isOpen)
}

const selectName = (name) => {
  setSelectedName(name)
  setIsOpen(false)
}
  return (
    <div>
        <Header/>
        <Dashboard/>
    <div  className='airtime'>
        <h2>Airtime TopUp</h2>
        <div className='airtimes'>
        <div>
        <Form.Label>Network*</Form.Label>
        <Form.Control size="text" 
            type="text" 
            placeholder=" "
            id= "inputs"  
            onClick={handleToggle}
            value={selectedName || ''}/>
        {isOpen && (<ul id='insides' className='drop-down list'>
                <li id='second'  onClick={( ) => selectName('MTN')}>
                   MTN
                </li>
                <li id='second'  onClick={( ) => selectName('GLO')}>
                    GLO
                </li>
                <li id='second'  onClick={( ) => selectName('9MOBILE')}>
                    9MOBILE
                </li>
                <li id='second'  onClick={( ) => selectName('AIRTEL')}>
                    AIRTEL
                </li>
                </ul>)}
        </div>
        <div>
        <Form.Label>Phone Number*</Form.Label>
        <Form.Control size="text" type="text" placeholder="input your phone number" id= "inputs"/>
        </div>
        <div>
        <Form.Label>Amount*</Form.Label>
        <Form.Control size="text" type="text" placeholder="input amount" id= "inputs" />
        </div>
            <button>Buy Now</button>
        </div>
    </div>
    </div>
  )
}

export default Airtime