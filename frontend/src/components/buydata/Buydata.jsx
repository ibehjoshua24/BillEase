import React from 'react'
import './Buydata.css'
import Dashboard from '../users/Dashboard'
import Header from '../users/Header'
import {useState} from 'react'

const Buydata = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [Open, setOpen] = useState(false)
  const [selectedName, setSelectedName] = useState('')
  const [selectingName, setSelectingName] = useState('')
  
  const handleToggle = () => {
    setIsOpen(!isOpen)
}
  const handleToggles = () => {
    setOpen(!Open)
  }
const selectName = (name) => {
  setSelectedName(name)
  setIsOpen(false)
}
const selected = (name) => {
  setSelectingName(name)
  setOpen(false)
}


  return (
    <div>
        <Dashboard/>
        <Header
        name='Buy Data'
        />
    <div className='data'>
        <h3>Buy Data Plan</h3>
        <div className='datas'>
            <div id='datalist'>
            <label htmlFor="">Network</label>
            <input 
            type="text"
            onClick={handleToggle}
            value={selectedName || ''}
            id= "inputs"
            />
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
            <div id='datalist'>
            <label htmlFor="">Data Type</label>
            <input 
            type="text"
            onClick={handleToggles}
            value={selectingName || ''}
            id= "inputs"
            />
            {Open && (<ul id='insides' className='drop-down list'>
                <li id='second'  onClick={( ) => selected('SME')}>
                   SME
                </li>
                <li id='second'  onClick={( ) => selected('CORPERATE GIFTING')}>
                    COPERATE GIFTING
                </li>
                <li id='second'  onClick={( ) => selected('DATA COUPONS')}>
                    DATA COUPONS
                </li>
                </ul>)}
            </div>
            <div id='datalist'>
            <label htmlFor="">Mobile Number</label>
            <input type="number" id= "inputs" />
            </div>
            <div id='datalist'>
            <label htmlFor="">Amount</label>
            <input type="number" id= "inputs" />
            </div>
            <button>Buy Now</button>
        </div>
    </div>
    </div>
  )
}

export default Buydata