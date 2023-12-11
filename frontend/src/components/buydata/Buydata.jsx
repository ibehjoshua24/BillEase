import React from 'react'
import './Buydata.css'
import Dashboard from '../users/Dashboard'
import Header from '../users/Header'

const Buydata = () => {
  return (
    <div>
        <Dashboard/>
        <Header
        name='Buy data'
        />
    <div className='data'>
        <h3>Buy Data Plan</h3>
        <div className='datas'>
            <div id='datalist'>
            <label htmlFor="">Network</label>
            <input type="text" />
            </div>
            <div id='datalist'>
            <label htmlFor="">Data Type</label>
            <input type="text" />
            </div>
            <div id='datalist'>
            <label htmlFor="">Mobile Number</label>
            <input type="number" />
            </div>
            <div id='datalist'>
            <label htmlFor="">Amount</label>
            <input type="number" />
            </div>
            <button>Buy Now</button>
        </div>
    </div>
    </div>
  )
}

export default Buydata