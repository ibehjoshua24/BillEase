import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FiAlignJustify } from "react-icons/fi";
// import {wallet} from '../../../public/images/wallet.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../users/Dashboard';
import Header from '../users/Header';
import './Wallet.css'
// import { useHistory } from 'react-router-dom';



const Wallet = () => {
    // const history = useHistory()
    const [isOpen, setIsOpen] = useState(false)
    const [selectedName, setSelectedName] = useState('')
    
    
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const selectName = (name) => {
        setSelectedName(name)
        setIsOpen(false)
    }

    const handleProceed = () => {
    if (selectedName) {
        
    }
    }
  return (
    <div>
        <Header
        name="Fund Wallet"/>
        <Dashboard/>
        <div className='wall'>
        <div className='walls'>
            <h4>WALLET FUNDING</h4>
            {/* <img src={wallet} alt="" /> */}
        </div>
        <div>
            <p>Select Payment Option</p>
            <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><FiAlignJustify /></InputGroup.Text>
        <Form.Control
          placeholder= '--Select Payment Medium--'
          aria-label="Username"
          aria-describedby="basic-addon1"
          onClick={handleToggle}
          value={selectedName || ''}
          readOnly
          type='text'
        />  
      </InputGroup>
      {isOpen && (<ul id='insides' className='drop-down list'>
                <li id='second'  onClick={( ) => selectName('PAYSTACK ATM')}>
                   PAYSTACK ATM
                </li>
                <li id='second'  onClick={( ) => selectName('MANUAL BANK')}>
                    MANUAL BANK
                </li>
                </ul>)}

            {selectedName &&  <Link to="/PayOnline"><button>Proceed</button></Link>}

        </div>
        </div>
    </div>
    )
}

export default Wallet